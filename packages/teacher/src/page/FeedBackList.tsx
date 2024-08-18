import { instance } from '@configs/axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, Input } from 'ui';
import StudentBox from '../component/StudentBox';

const baseURL = 'https://prod-server.xquare.app/whopper/document/student';

interface Student {
  documentId: string;
  name: string;
  feedbackNumber: number;
  profileImage: string;
  schoolNumber: string;
}

export const FeedBackList = () => {
  const [name, setName] = useState<string>('');
  const [grade, setGrade] = useState<number | null>(null);
  const [classNumber, setClassNumber] = useState<number | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, [name, grade, classNumber]);

  const fetchStudents = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      console.error('No access token found');
      navigate('');
      return;
    }

    try {
      const response = await instance.get(baseURL, {
        params: {
          name: name,
          grade: grade,
          classNumber: classNumber,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.status) {
        throw new Error('Network response was not ok');
      }

      const data = response.data;
      setStudents(data.data);
    } catch (error) {
      console.error('Failed to fetch students', error);
    }
  };

  const filteredStudents = students.filter((student) => {
    const matchName = name ? student.name?.includes(name) : true;
    const matchGrade = grade !== null && student.schoolNumber
      ? student.schoolNumber.startsWith(grade.toString())
      : true;
    const matchClass = classNumber !== null && student.schoolNumber
      ? student.schoolNumber.slice(1, 2) === classNumber.toString()
      : true;
    const matchStatus = status ? (status === '모두' ? true : (status === '제출' ? student.feedbackNumber > 0 : student.feedbackNumber === 0)) : true;
    return matchName && matchGrade && matchClass && matchStatus;
  });

  return (
    <div className='flex justify-center'>
      <div className="flex itm flex-col p-12 text-white w-[1100px]">
        <h1 className="text-4xl font-bold mb-2">피드백 관리</h1>
        <p className="text-2xl font-bold text-gray-500 mb-8">학생들이 수정한 피드백들을 관리해보세요</p>
        
        <div className="flex space-x-4 mb-8">
          <Input
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Dropdown
            placeholder="학년"
            selected={grade !== null ? grade.toString() : ''}
            selections={['1', '2', '3']}
            onSelect={(data) => {
              if (data) setGrade(Number(data));
            }}
          />
          <Dropdown
            placeholder="반"
            selected={classNumber !== null ? classNumber.toString() : ''}
            selections={['1', '2', '3', '4']}
            onSelect={(data) => {
              if (data) setClassNumber(Number(data));
            }}
          />
        </div>

        <div className="w-full max-w-4xl space-y-4">
          {filteredStudents.length === 0 && (
            <div className="p-4 text-gray-400">학생 정보가 없습니다.</div>
          )}
          {filteredStudents.map((student) => (
            <StudentBox
              key={student.documentId}
              profileImage={student.profileImage}
              schoolNumber={student.schoolNumber}
              name={student.name}
              feedbackNumber={student.feedbackNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
