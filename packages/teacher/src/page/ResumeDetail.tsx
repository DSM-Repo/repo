import React, { useEffect, useState } from 'react';

interface ResumeDetailProps {
  writer: {
    name: string;
    email: string;
    major_name: string;
    class_info: {
      grade: number;
      class_number: number;
      number: number;
      school_number: string;
    };
    department: string;
    url: string;
    skill_set: string[];
  };
  introduce: { element_id: string; heading: string; introduce: string; };
  project_list: { element_id: string; name: string; image_info: {image_path: string; orginal_name: string;}; type: string; start_date: string; end_date: string; skill_set: [];  description: {motive: string; role: string; retrospective: string;}; urls: string[] }[];
  achievement_list: { element_id: string; name: string; institution: string; date: string; type: string;}[];
  activity_list: { element_id: string; name: string; start_date: string; end_date: string; is_period: boolean; description: string; }[];
}

export const ResumeDetail = () => {
  const [pages, setPages] = useState<React.ReactNode[][]>([]);
  const [resumeData, setResumeData] = useState<ResumeDetailProps | null>(null);

  useEffect(() => {
    const fetchResume = async () => {
      const documentId = localStorage.getItem('documentId');
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('No access token found');
        return;
      }

      try {
        const response = await fetch(`https://prod-server.xquare.app/whopper/document/student/${documentId}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          console.error(`Failed to fetch resume. Status: ${response.status}`);
          return;
        }

        const data: ResumeDetailProps = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error('Failed to fetch resume', error);
      }
    };

    fetchResume();
  }, []);

  const splitContent = () => {
    const containerHeight = 815;
    let currentPage: React.ReactNode[] = [];
    const newPages: React.ReactNode[][] = [];
    let accumulatedHeight = 0;

    if (!resumeData) return;

    // JSX 엘리먼트들을 배열로 정의합니다.
    const elements: React.ReactNode[] = [
      <div className="mb-[28px]" key="1">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <p className="text-[30px] font-bold text-black mr-[10px]">{resumeData.writer.name || '이름 없음'}</p>
              <p className="text-[24px] font-bold text-black">{resumeData.writer.major_name || '전공 없음'}</p>
            </div>
            <div className="flex justify-between mt-[5px] pt-[3px] pb-[3px]">
              <p className="text-[14px] font-bold text-black mr-1">{resumeData.writer.department || '학과 없음'}</p> {/* 학과로 교체 */}
              <p className="text-[14px] font-bold text-gray-500 mr-[10px]">{resumeData.writer.class_info.school_number || '학번 없음'}</p>
              <p className="text-[14px] font-bold text-black">{resumeData.writer.email || '이메일 없음'}</p>
            </div>
          </div>
          <div className="h-full flex items-center">
            <div className="w-[100px] h-[100px] bg-gray-200 ml-[10px] rounded-[8px] flex items-center justify-center text-gray-500">QR</div>
          </div>
        </div>
      </div>,
      resumeData.introduce.heading ? (
        <div className="mb-[20px]" key="2">
          <p className="text-[20px] font-bold text-black">{resumeData.introduce.heading}</p>
        </div>
      ) : null,
      resumeData.introduce.introduce ? (
        <div className="mb-[25px]" key="3">
          <p className="text-[14px] font-bold text-gray-500">{resumeData.introduce.introduce}</p>
        </div>
      ) : null,
      resumeData.writer.skill_set.length > 0 ? (
        <div className="mb-[25px]" key="4">
          <p className="text-[17px] font-bold text-black">기술 스택</p>
          <div className="flex flex-wrap mt-[10px] pl-[10px] border-l-2 border-black">
            {resumeData.writer.skill_set.map((skill: string, index: number) => (
              <p className="text-[14px] font-bold text-black m-[2px] mx-[8px]" key={index}>{skill}</p>
            ))}
          </div>
        </div>
      ) : null,
      resumeData.achievement_list.length > 0 ? (
        <div className="mb-[25px]" key="6">
          <p className="text-[17px] font-bold text-black">자격증 & 수상</p>
          {resumeData.achievement_list.map((achievement, index) => (
            <div className="my-[10px] flex items-center justify-between border-l-2 border-black pl-[18px]" key={index}>
              <p className="text-[17px] font-bold text-black">{achievement.name || '자격증 이름 없음'}</p>
              <p className="text-[14px] font-bold text-gray-500">{achievement.institution || '기관 없음'} | {achievement.date || '날짜 없음'}</p>
            </div>
          ))}
        </div>
      ) : null,
      resumeData.activity_list.length > 0 ? (
        <div className="mb-[25px]" key="7">
          <p className="text-[17px] font-bold text-black">활동</p>
          {resumeData.activity_list.map((activity, index) => (
            <div className="my-[10px] border-l-2 border-black pl-[18px]" key={index}>
              <div className='flex items-center justify-between'>
                <p className="text-[17px] font-bold text-black">{activity.name || '활동 이름 없음'}</p>
                <p className="text-[14px] font-bold text-gray-500">{activity.start_date} ~ {activity.end_date}</p>
                {/* <p className="text-[14px] font-bold text-gray-500">{activity.startDate}</p> */}
              </div>
              <p className="text-[14px] font-bold text-black">{activity.description || '내용 없음'}</p>
            </div>
          ))}
        </div>
      ) : null,
      resumeData.project_list.length > 0 ? (
        <div className="mb-[25px]" key="5">
          <p className="text-[17px] font-bold text-black">프로젝트</p>
          {resumeData.project_list.map((project, index) => (
            <div className="my-[10px] border-l-2 border-black pl-[18px]" key={index}>
              <p className="text-[17px] font-bold text-black">{project.name || '프로젝트 이름 없음'}</p>
              <p className="text-[14px] font-bold text-gray-500">{project.description.motive || '설명 없음'}</p>
              <p className="text-[14px] font-bold text-gray-500">{project.description.role || '설명 없음'}</p>
              <p className="text-[14px] font-bold text-gray-500">{project.description.retrospective || '설명 없음'}</p>
              {/* {project.urls.length > 0 && (
                <div className="mt-[5px]">
                  {project.urls.map((url: string, urlIndex: number) => (
                    <a href={url} key={urlIndex} className="text-blue-500">{url}</a>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      ) : null,
    ];
    // 임의의 height를 사용하여 페이지 분할을 구현
    const estimatedHeights = [180, 40, 40, 120, 140, 140]; // 각 요소의 높이를 가정

    for (let i = 0; i < elements.length; i++) {
      const elementHeight = estimatedHeights[i];
      accumulatedHeight += elementHeight;

      if (accumulatedHeight <= containerHeight) {
        currentPage.push(elements[i]);
      } else {
        newPages.push([...currentPage]); // 이전 페이지를 추가
        currentPage = [elements[i]]; // 새 페이지 시작
        accumulatedHeight = elementHeight;
      }
    }
    if (currentPage.length) newPages.push(currentPage); // 마지막 페이지 추가

    setPages(newPages);
  };

  useEffect(() => {
    splitContent();
  }, [resumeData]);

  return (
    <div className="flex ml-[100px]">
      {pages.map((page, idx) => (
        <div
          key={idx}
          className="w-[700px] h-[815px] p-[30px] px-[32px] bg-white flex-shrink-0 overflow-hidden ml-[30px] rounded-lg"
        >
          {page.map((content, contentIdx) => (
            <div key={contentIdx}>{content}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
