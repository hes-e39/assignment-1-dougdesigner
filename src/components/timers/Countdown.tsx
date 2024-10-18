import Button from '../generic/Button';
import DisplayTime from '../generic/DisplayTime';

const Countdown = () => {
    return (
        <div>
            <DisplayTime />
            <Button type="start" />
            <Button type="pause" />
            <Button type="resume" />
            <Button type="reset" />
            <Button type="fastforward" />
        </div>
    );
};

export default Countdown;
