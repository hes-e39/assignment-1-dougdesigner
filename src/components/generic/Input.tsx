interface InputProps {
    minutes?: number;
    seconds?: number;
    onMinutesChange?: (value: number) => void;
    onSecondsChange?: (value: number) => void;
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    minutes = 0,
    seconds = 0,
    onMinutesChange = () => {},
    onSecondsChange = () => {},
    disabled = false,
}) => {
    const minuteOptions = Array.from({ length: 61 }, (_, i) => i);
    const secondOptions = Array.from({ length: 60 }, (_, i) => i);

    return (
        <div className="flex space-x-4">
            <div className="flex flex-row-reverse items-center">
                <label htmlFor="minutes" className="block text-lg font-semibold text-white">Minutes</label>
                <select
                    id="minutes"
                    value={minutes}
                    disabled={disabled}
                    onChange={(e) => onMinutesChange(Number.parseInt(e.target.value))}
                    className={`mr-2 py-2 px-4 block w-full bg-gray-800 border-2 border-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl ${
                        disabled ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                >
                    {minuteOptions.map((minute) => (
                        <option key={minute} value={minute}>
                            {minute.toString()}
                        </option>
                    ))}
                </select>
            </div>

            <div className="flex flex-row-reverse items-center">
                <label htmlFor="seconds" className="block text-lg font-semibold text-white">Seconds</label>
                <select
                    id="seconds"
                    value={seconds}
                    disabled={disabled}
                    onChange={(e) => onSecondsChange(Number.parseInt(e.target.value))}
                    className={`mr-2 py-2 px-4 block w-full bg-gray-800 border-2 border-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xl ${
                        disabled ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                >
                    {secondOptions.map((second) => (
                        <option key={second} value={second}>
                            {second.toString()}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
};

export default Input;
