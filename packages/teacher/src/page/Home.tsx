import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Dropdown, Input } from 'ui';
import StudentBox from '../component/StudentBox';

const baseURL = 'https://prod-server.xquare.app/whopper/';

interface StudentInfo {
  profileImage: string;
  schoolNumber: string;
}

interface Student {
  documentId: string;
  studentInfo: StudentInfo;
  name: string;
  feedbackNumber: number;
}

export const Home = () => {
  const [name, setName] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [classNumber, setClassNumber] = useState<string>('');
  const [majorId, setMajorId] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [students, setStudents] = useState<Student[]>([]);
  // const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, [name, grade, classNumber, majorId, status]);

  const fetchStudents = async () => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      console.error('No access token found');
      // navigate('/login');
      return;
    }

    try {
      const response = await fetch(
        `${baseURL}?name=${name}&grade=${grade}&classNumber=${classNumber}&majorId=${majorId}&documentStatus=${status}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 401 || response.status === 403) {
        // navigate('/login');
        console.error('Unauthorized or forbidden');
        return;
      }

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setStudents(data.data);
    } catch (error) {
      console.error('Failed to fetch students', error);
    }
  };

  const filteredStudents = students.filter((student) => {
    const matchName = name ? student.name.includes(name) : true;
    const matchGrade = grade ? student.studentInfo.schoolNumber.startsWith(grade) : true;
    const matchClass = classNumber ? student.studentInfo.schoolNumber.slice(1, 2) === classNumber : true;
    const matchMajor = majorId ? student.studentInfo.schoolNumber.slice(2, 4) === majorId : true;
    const matchStatus = status ? (status === '모두' ? true : (status === '제출' ? student.feedbackNumber > 0 : student.feedbackNumber === 0)) : true;
    return matchName && matchGrade && matchClass && matchMajor && matchStatus;
  });

  return (
    <div className='flex justify-center'>
      <div className="flex flex-col p-12 min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-2">레주메 관리</h1>
        <p className="text-2xl font-bold text-gray-500 mb-8">학생들이 작성한 레주메들을 관리해보세요</p>
        
        <div className="flex space-x-4 mb-8">
          <Input
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Dropdown
            placeholder="학년"
            selected={grade}
            selections={['1', '2', '3']}
            onSelect={(data) => setGrade(data)}
          />
          <Dropdown
            placeholder="반"
            selected={classNumber}
            selections={['1', '2', '3', '4']}
            onSelect={(data) => setClassNumber(data)}
          />
          <Dropdown
            placeholder="전공"
            selected={majorId}
            selections={['FrontEnd', 'BackEnd', 'Android', 'iOS', 'Flutter']}
            onSelect={(data) => setMajorId(data)}
          />
          <Dropdown
            placeholder="상태"
            selected={status}
            selections={['제출', '미제출', '모두']}
            onSelect={(data) => setStatus(data)}
          />
        </div>

        <div className="w-full max-w-4xl space-y-4">
          {filteredStudents.length === 0 && (
            <div className="p-4 text-gray-400">학생 정보가 없습니다.</div>
          )}
          {filteredStudents.map((student) => (
            <StudentBox
              key={student.documentId}
              profileImage={student.studentInfo.profileImage}
              schoolNumber={student.studentInfo.schoolNumber}
              name={student.name}
              feedbackNumber={student.feedbackNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
