interface DisplayRestProps {
    mode: 'work' | 'rest';
}

const DisplayRest: React.FC<DisplayRestProps> = ({ mode }) => {
    return (
        <div className="mt-0 text-white my-5 font-mono text-2xl p-4 text-center">
            {mode === 'work' ? 'Work Period' : 'Rest Period'}
        </div>
    );
};

export default DisplayRest;