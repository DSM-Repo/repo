import { ReactElement } from 'react';
import { Box } from 'ui';
import { useNavigate } from 'react-router-dom';

interface StudentBoxProps {
  profileImage: string;
  schoolNumber: string;
  name: string;
  feedbackNumber: number;
}

const StudentBox = ({
  profileImage,
  schoolNumber,
  name,
  feedbackNumber,
}: StudentBoxProps): ReactElement => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/resume/${schoolNumber}`);
  };

  return (
    <Box
      color="dark"
      size={{ width: '100%', height: 'auto', padding: '20px' }}
      round={{ tl: '10px', tr: '10px', br: '10px', bl: '10px' }}
    >
      <div className="flex items-center space-x-4" onClick={handleClick}>
        <img
          src={profileImage}
          alt="Profile"
          className="w-16 h-16 rounded-full"
        />
        <div className="flex items-center cursor-pointer">
          <p className="font-bold text-[25px] ml-2">{schoolNumber}</p> {/* bold 25px */}
          <p className="font-bold text-[25px] ml-2">{name}</p> {/* bold 25px */}
          <p className="font-bold text-[20px] ml-3 text-[#999999]">피드백 {feedbackNumber}개</p> {/* bold 20px */}
        </div>
      </div>
    </Box>
  );
};

export default StudentBox;
