export const MyProgress: React.FC<{
    max: number;
    count: number;
}> = ({ max, count }) => {
    return (
        <div className="w-full h-[15px] rounded-[5px] overflow-hidden bg-white">
            <div
                style={{ width: `${(count / max) * 100}%` }}
                className="h-full bg-orange"
            ></div>
        </div>
    );
};
