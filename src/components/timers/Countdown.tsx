import Button from '../generic/Button';
import DisplayTime from '../generic/DisplayTime';
import Input from '../generic/Input';

import { useState } from 'react';

const Countdown = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    return (
        <div>
            <DisplayTime />
            <br />
            <Input 
                minutes={minutes} 
                seconds={seconds} 
                onMinutesChange={setMinutes} 
                onSecondsChange={setSeconds} 
            />
            <br />
            <Button type="start" />
            <Button type="pause" />
            <Button type="resume" />
            <Button type="reset" />
            <Button type="fastforward" />
        </div>
    );
};

export default Countdown;
