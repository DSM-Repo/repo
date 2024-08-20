import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "ui";

interface LibraryItem {
    id: string;
    access_right: 'PUBLIC' | 'PRIVATE';
    year: number;
    grade: number;
    generation: number;
    document_url: string;
}

export const Library = () => {
    const [libraryItems, setLibraryItems] = useState<LibraryItem[]>([]);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchLibraryItems();
    }, []);

    const fetchLibraryItems = async () => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
            console.error('No access token found');
            navigate('');
            return;
        }

        try {
            const response = await fetch('https://prod-server.xquare.app/whopper/library', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
            
            if (response.ok) {
                const data = await response.json();
                setLibraryItems(data.data || []);
                localStorage.setItem('libraryId', data.id);
            } else {
                throw new Error('Failed to fetch library items');
            }
        } catch (err) {
            setError((err as Error).message);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col p-12 text-white w-[1100px]">
                <h1 className="text-4xl font-bold mb-2">도서관</h1>
                <p className="text-2xl font-bold text-gray-500 mb-8">지금까지 작성된 레주메북들을 읽어보세요</p>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="mt-4 grid grid-cols-1 gap-4 w-full max-w-[1000px]">
                    {libraryItems.map(item => (
                        <div
                            key={item.id}
                            className="bg-libraryBackground w-[1000px] h-[101px] flex justify-between rounded-[5px] items-center px-4 cursor-pointer"
                        >
                            <span className="text-white text-xl font-bold">{item.year} {item.grade}학년 {item.generation}기</span>
                            <Dropdown
                                size="small"
                                placeholder="공유"
                                selections={["학생만", "전체"]}
                                selected={item.access_right}
                                onSelect={() => {}}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
