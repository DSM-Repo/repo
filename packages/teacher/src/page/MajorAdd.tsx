import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "ui";
import { TagBox } from "../component/TagBox";

interface Major {
    id: string;
    name: string;
}

export const MajorAdd = () => {
    const [major, setMajor] = useState<string>('');
    const [addedMajors, setAddedMajors] = useState<Major[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMajors();
    }, []);

    const fetchMajors = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            console.error('No access token found');
            navigate('');
            return;
        }

        try {
            const response = await fetch('https://prod-server.xquare.app/whopper/major', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setAddedMajors(data.data);
            } else {
                throw new Error('Failed to fetch majors');
            }
        } catch (err) {
            setError((err as Error).message);
        }
    };

    const handleAddMajor = async () => {
        setError(null);
        setSuccess(false);

        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            console.error('No access token found');
            navigate('/login');
            return;
        }

        try {
            const response = await fetch('https://prod-server.xquare.app/whopper/major', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ majors: [major] })
            });

            if (response.ok) {
                setSuccess(true);
                setMajor('');
                fetchMajors();
            } else {
                throw new Error('전공추가에 실패하였습니다');
            }
        } catch (err) {
            setError((err as Error).message);
        }
    };

    const handleDeleteMajor = async (id: string) => {
        setError(null);
        setSuccess(false);

        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            console.error('No access token found');
            navigate('/login');
            return;
        }

        try {
            const response = await fetch(`https://prod-server.xquare.app/whopper/major/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                setSuccess(true);
                fetchMajors();
            } else {
                throw new Error('전공삭제에 실패하였습니다');
            }
        } catch (err) {
            setError((err as Error).message);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleAddMajor();
        }
    };

    const handleRemoveMajor = (id: string) => {
        handleDeleteMajor(id);
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col p-12 text-white w-[1100px]">
                <h1 className="text-4xl font-bold mb-2">전공추가</h1>
                <p className="text-2xl font-bold text-gray-500 mb-8">추가할 전공을 입력하고 Enter 키를 눌러주세요</p>
                <Input
                    placeholder="추가할 전공을 입력하세요"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    onKeyDown={handleKeyDown}
                    size="full"
                    className="mb-4 w-full"
                />
                {success && <p className="text-green-500 mt-2">전공이 성공적으로 처리되었습니다!</p>}
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <div className="mt-4 grid grid-cols-4 gap-4 w-full max-w-[1000px]">
                    {addedMajors.map(major => (
                        <TagBox
                            key={major.id}
                            major={major.name}
                            onRemove={() => handleRemoveMajor(major.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
