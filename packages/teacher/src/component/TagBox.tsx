import { X } from "@/icons";
import { Box } from "ui";

interface TagBoxProps {
    major: string;
    onRemove: () => void;
}

export const TagBox = ({ major, onRemove }: TagBoxProps) => {
    return (
        <div className="w-[206px] h-[52px]">
            <Box className="flex flex-row items-center text-white p-2 rounded">
                <p className="flex-grow">{major}</p>
                <button onClick={onRemove} className="text-gray-300 hover:text-white">
                    <X />
                </button>
            </Box>
        </div>
    );
};
