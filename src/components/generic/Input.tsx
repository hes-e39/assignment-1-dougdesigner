interface InputProps {
    minutes?: number;
    seconds?: number;
    onMinutesChange?: (value: number) => void;
    onSecondsChange?: (value: number) => void;
}

const Input: React.FC<InputProps> = ({
    minutes = 0,
    seconds = 0,
    onMinutesChange = () => {},
    onSecondsChange = () => {}
}) => {
    const minuteOptions = Array.from({ length: 61 }, (_, i) => i);
    const secondOptions = Array.from({ length: 60 }, (_, i) => i);

    return (
        <div className="flex space-x-4">
            <div>
                <label htmlFor="minutes" className="block text-sm font-medium text-white">Minutes</label>
                <select
                    id="minutes"
                    value={minutes}
                    onChange={(e) => onMinutesChange(Number.parseInt(e.target.value))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    {minuteOptions.map((minute) => (
                        <option key={minute} value={minute}>
                            {minute.toString()}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="seconds" className="block text-sm font-medium text-white">Seconds</label>
                <select
                    id="seconds"
                    value={seconds}
                    onChange={(e) => onSecondsChange(Number.parseInt(e.target.value))}
                    className="mt-1 block w-full bg-gray-700 border border-gray-600 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
