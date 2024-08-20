import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Input } from 'ui';
import StudentBox from '../component/StudentBox';

const baseURL = 'https://prod-server.xquare.app/whopper/document/student';

interface Student {
  document_id: string;
  student_info: {
    school_number: string;
    name: string;
    profile_image: string;
  };
  status: string;
  number_of_feedback: number;
}

interface Major {
  id: string;
  name: string;
}

export const Home = () => {
  const [name, setName] = useState<string>('');
  const [grade, setGrade] = useState<number | null>(null);
  const [classNumber, setClassNumber] = useState<number | null>(null);
  const [majorId, setMajorId] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [students, setStudents] = useState<Student[]>([]);
  const [allStudents, setAllStudents] = useState<Student[]>([]);
  const [majorOptions, setMajorOptions] = useState<Major[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMajors();
    fetchStudents();
  }, []);

  useEffect(() => {
    filterStudents();
  }, [name, grade, classNumber, majorId, status]);

  const fetchMajors = async () => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      console.error('No access token found');
      navigate('');
      return;
    }

    try {
      const response = await fetch('https://prod-server.xquare.app/whopper/major', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!response.ok) {
        console.error(`Failed to fetch majors. Status: ${response.status}`);
        const errorText = await response.text();
        console.error(`Response body: ${errorText}`);
        throw new Error('Failed to fetch majors');
      }

      const data = await response.json();
      setMajorOptions(data.data);
    } catch (error) {
      console.error('Failed to fetch majors', error);
    }
  };

  const fetchStudents = async () => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      console.error('No access token found');
      navigate('');
      return;
    }

    try {
      const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      if (!response.ok) {
        console.error(`Failed to fetch students. Status: ${response.status}`);
        const errorText = await response.text();
        console.error(`Response body: ${errorText}`);
        throw new Error('Failed to fetch students');
      }

      const data = await response.json();
      const students = data.data.map((item: any) => ({
        documentId: item.documentId,
        studentInfo: item.studentInfo,
        status: item.status,
        numberOfFeedback: item.numberOfFeedback
      }));
      setAllStudents(students);
      setStudents(students);
    } catch (error) {
      console.error('Failed to fetch students', error);
    }
  };

  const filterStudents = () => {
    const filtered = allStudents.filter((student) => {
      const matchName = name ? student.student_info.name?.includes(name) : true;
      const matchGrade = grade !== null && student.student_info.school_number
        ? student.student_info.school_number.startsWith(grade.toString())
        : true;
      const matchClass = classNumber !== null && student.student_info.school_number
        ? student.student_info.school_number.slice(1, 2) === classNumber.toString()
        : true;
      const matchMajor = majorId && student.student_info.school_number
        ? student.student_info.school_number.slice(2, 4) === majorId
        : true;
      const matchStatus = status ? (status === '모두' ? true : (status === '제출' ? student.number_of_feedback > 0 : student.number_of_feedback === 0)) : true;
      return matchName && matchGrade && matchClass && matchMajor && matchStatus;
    });

    setStudents(filtered);
  };

  const majorNames = majorOptions.map(option => option.name);

  return (
    <div className='flex justify-center'>
      <div className="flex flex-col p-12 text-white w-[1100px]">
        <h1 className="text-4xl font-bold mb-2">레주메 관리</h1>
        <p className="text-2xl font-bold text-gray-500 mb-8">학생들이 작성한 레주메들을 관리해보세요</p>
        
        <div className="flex space-x-4 mb-8">
          <Input
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className={'flex items-center'}>
            <Dropdown
              placeholder="학년"
              selected={grade !== null ? grade.toString() : ''}
              selections={['1', '2', '3']}
              onSelect={(data) => {
                if (data) setGrade(Number(data));
              }}
            />
          </div>
          <div className={'flex items-center'}>
            <Dropdown
              placeholder="반"
              selected={classNumber !== null ? classNumber.toString() : ''}
              selections={['1', '2', '3', '4']}
              onSelect={(data) => {
                if (data) setClassNumber(Number(data));
              }}
            />
          </div>
          <div className={'flex items-center'}>
            <Dropdown
              placeholder="전공"
              selected={majorOptions.find(option => option.id === majorId)?.name || ''}
              selections={majorNames}
              onSelect={(name) => {
                const selectedOption = majorOptions.find(option => option.name === name);
                if (selectedOption) {
                  setMajorId(selectedOption.id);
                }
              }}
            />
          </div>
          <div className={'flex items-center'}>
            <Dropdown
              placeholder="작성 상태"
              selected={status}
              selections={['제출', '미제출', '모두']}
              onSelect={(data) => {
                if (data) setStatus(data);
              }}
            />
          </div>
        </div>
        <div className="w-full max-w-4xl space-y-4">
          {students.length === 0 && (
            <div className="p-4 text-gray-400">학생 정보가 없습니다.</div>
          )}
          {students.map((student) => (
            <StudentBox
              key={student.document_id}
              documentId={student.document_id}
              profileImage={student.student_info.profile_image}
              schoolNumber={student.student_info.school_number}
              name={student.student_info.name}
              feedbackNumber={student.number_of_feedback}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
