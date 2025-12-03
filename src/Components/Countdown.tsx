
const Countdown = () => {
  return (
    <>
    <div className="countdown-header">
        <h1>Days left to go live</h1>
    </div>
    <div className="countdown-clock">
        <div className="days">
            <h2>Days</h2>
            <span>27</span> 
        </div>
        <div className="hours">
            <h2>Hours</h2>
            <span className="digits">14</span> 
        </div>
        <div className="minutes">
            <h2>Minutes</h2>
            <span>11</span> 
        </div>
        <div className="seconds">
            <h2>Seconds</h2>
            <span>03</span>
        </div>
    </div>
    </>
  )
}

export default Countdown