import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from 'ui';

interface StudentBoxProps {
  documentId: string;
  profileImage: string;
  schoolNumber: string;
  name: string;
  feedbackNumber: number;
}

const StudentBox = ({
  documentId,
  profileImage,
  schoolNumber,
  name,
  feedbackNumber,
}: StudentBoxProps): ReactElement => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('documentId', documentId);
    navigate(`/document/student/${documentId}`);
  };

  return (
    <Box
      width="100%"
      padding='20px'
    >
      <div className="flex items-center space-x-4 cursor-pointer" onClick={handleClick}>
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className="w-16 h-16 rounded-full"
        />
        <div className="flex items-center">
          <p className="font-bold text-[25px] mr-2">{schoolNumber}</p>
          <p className="font-bold text-[25px]">{name}</p>
          <p className="font-bold text-[20px] text-[#999999] ml-4">피드백 {feedbackNumber}개</p>
        </div>
      </div>
    </Box>
  );
};

export default StudentBox;
