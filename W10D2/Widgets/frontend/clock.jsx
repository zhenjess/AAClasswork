
import React from 'react';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    }

    this.tick = this.tick.bind(this);
    // when we say this.tick == it is essentially calling "tick" on the "window"
    // the context for setInterval when we call this.tick is "window"
    // therefore, we need to pass it the context "this" so that it calls tick on the class Clock
  }

  componentDidMount () {
    this.intervalId = setInterval(this.tick, 1000);
  }
  // waitinig until the component is loaded/actually on the page

  componentWillUnmount () {
    clearInterval(this.intervalId);
  }
  // Don't store this in component's state since it doesn't affect the UI. Instead, just store it directly on "this".

  tick () {
    this.setState({time: new Date()})
  }

  render () {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <div>
        <h1>Tick Tick</h1>
        <div className="jess-kell-clock">
          <p>
            <span>
              Time:
            </span>
            <span>
              { hours } : { minutes } : { seconds } EST
            </span>
          </p>
          <p>
            <span>
              Date:
            </span>
            <span>
              {this.state.time.toDateString()}
            </span>
          </p>
          <p>
            <span>
              Year:
            </span>
            <span>
              {this.state.time.getFullYear()}
            </span>
          </p>
        </div>
      </div>
    )

  }

}

export default Clock;

