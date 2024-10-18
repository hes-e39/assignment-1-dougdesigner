interface PanelProps {
    title: string;
    description?: string;
    children: React.ReactNode; 
}

const Panel: React.FC<PanelProps> = ({ title, description, children }) => {
    return (
        <div className="bg-gray-800 shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-base font-semibold leading-6 text-white">{title}</h3>
                {description && (
                    <div className="mt-2 max-w-xl text-sm text-gray-400">
                        <p>{description}</p>
                    </div>
                )}
                <div className="mt-5">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Panel;
