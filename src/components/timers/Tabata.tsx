import Panel from '../generic/Panel';

const Tabata = () => {
    return (
        <Panel
            title="Tabata"
            description="An interval timer with work/rest periods. Example: 20s/10s, 8 rounds, would count down from 20 seconds to 0, then count down from 10 seconds to 0, then from 20, then from 10, etc, for 8 rounds. A full round includes both the work and rest. In this case, 20+10=30 seconds per round."
            >
        </Panel>
    );
};

export default Tabata;
