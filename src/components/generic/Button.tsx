interface ButtonProps {
    type: 'start' | 'pause' | 'resume' | 'reset' | 'fastforward';
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({type, onClick, disabled = false }) => {
    const buttonStyles = {
        start: 'bg-green-600 hover:bg-green-800 text-green-100',
        pause: 'bg-yellow-600 hover:bg-yellow-800 text-yellow-100',
        resume: 'bg-yellow-600 hover:bg-yellow-800 text-yellow-100',
        reset: 'bg-orange-600 hover:bg-orange-800 text-orange-100',
        fastforward: 'bg-red-600 hover:bg-red-800 text-red-100',
    };

    const disabledStyle = 'bg-gray-700 text-gray-400 cursor-not-allowed';

    const label = {
        start: 'Start',
        pause: 'Pause',
        resume: 'Resume',
        reset: 'Reset',
        fastforward: 'End',
    };

    return (
        <button
            onClick={onClick || (() => {})}
            disabled={disabled}
            className={`py-2 px-4 rounded-full text-lg font-semibold transition-all duration-200 ${disabled ? disabledStyle : buttonStyles[type]}`}>
            {label[type]}
        </button>
    );
};

export default Button;
