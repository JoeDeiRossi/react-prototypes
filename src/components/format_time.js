
import React, {Component} from 'react';

class FormatTime extends Component {
    constructor(props) {
        super(props);

        this.timerStyle = {
            display: 'inline-block',
            position: 'relative',
            left: '50%',
            transform: 'translate(-50%)',
            width: '383px'
        };
    }
    
    render() {
        const {hour, min, sec, ms} = this.millisecondsToTime();

        return (
            <div style={this.timerStyle}>{hour}:{min}:{sec}.{ms}</div>
        )
    }

    millisecondsToTime() {
        const {elapsed} = this.props;
        const sec = elapsed / 1000;
        const min = sec / 60;

        return {
            hour: this.leadingZero(Math.floor(min / 60)),
            min: this.leadingZero(Math.floor(min % 60)),
            sec: this.leadingZero(Math.floor(sec % 60)),
            ms: this.trailingZero(Math.floor(elapsed % 100))
        };
    }

    leadingZero(number) {
        if (number < 10) {
            return '0' + number;
        }
        return number;
    }

    trailingZero(number) {
        if (number < 10) {
            return number + '0';
        }
        return number;
    }
}

export default FormatTime;
