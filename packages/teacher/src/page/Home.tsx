import { useState } from 'react';
import { Dropdown } from '../../../ui/src/atoms/Dropdown';
import { Input } from '../../../ui/src/atoms/Input';

export const Home = () => {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');
    const [classroom, setClassroom] = useState('');
    const [techStack, setTechStack] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleGradeSelect = (selected: string) => {
        setGrade(selected);
    };

    const handleClassroomSelect = (selected: string) => {
        setClassroom(selected);
    };

    const handleTechStackSelect = (selected: string) => {
        setTechStack(selected);
    };

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">레주메 관리</h1>

            <h2 className="text-2xl font-bold mb-6">
                학생들이 작성한 레주메들을 관리해보세요
            </h2>
            
            <div className="mb-6">
                <Input
                    placeholder="이름을 입력해주세요"
                    size="small"
                    value={name}
                    onChange={handleNameChange}
                />
                <div className="flex space-x-4 mt-4">
                    <Dropdown
                        placeholder="학년"
                        size="small"
                        selected={grade}
                        selections={["1학년", "2학년", "3학년"]}
                        onSelect={handleGradeSelect}
                    />
                    <Dropdown
                        placeholder="반"
                        size="small"
                        selected={classroom}
                        selections={["1반", "2반", "3반", "4반"]}
                        onSelect={handleClassroomSelect}
                    />
                    <Dropdown
                        placeholder="기술 스택"
                        size="small"
                        selected={techStack}
                        selections={["React", "Vue", "Angular"]}
                        onSelect={handleTechStackSelect}
                    />
                </div>
            </div>

            <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                    <div className="w-35 h-35 bg-gray-200 rounded-full flex items-center justify-center">
                        {/* Img */}
                        <span className="text-gray-600 text-xl">P</span>
                    </div>
                    <div className="flex-1">
                        <p className="text-2xl font-bold mb-1">2101</p>
                        <p className="text-2xl font-bold mb-1">일기준</p>
                        <p className="text-lg font-bold text-center">피드백 0개</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
