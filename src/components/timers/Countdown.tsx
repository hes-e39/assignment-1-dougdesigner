import Button from '../generic/Button';

const Countdown = () => {
    return (
        <div>
            <Button type="start" />
            <Button type="pause" />
            <Button type="resume" />
            <Button type="reset" />
            <Button type="fastforward" />
        </div>
    );
};

export default Countdown;
