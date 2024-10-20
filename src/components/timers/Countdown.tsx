import Button from '../generic/Button';
import DisplayTime from '../generic/DisplayTime';
import Input from '../generic/Input';
import Panel from '../generic/Panel';

import { useState } from 'react';

const Countdown = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return (
        <Panel 
            title="Countdown" 
            description="A timer that counts down from X amount of time (e.g. count down to 0, starting at 2 minutes and 30)"
            >
            <DisplayTime />
            <Input 
                minutes={minutes} 
                seconds={seconds} 
                onMinutesChange={setMinutes} 
                onSecondsChange={setSeconds} 
            />
            <Button type="start" />
            <Button type="pause" />
            <Button type="resume" />
            <Button type="reset" />
            <Button type="fastforward" />
        </Panel>
    );
};

export default Countdown;
