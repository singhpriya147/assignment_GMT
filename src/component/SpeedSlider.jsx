
import '../styles/SpeedSlider.css'
const SpeedSlider = ({ speed, setSpeed }) => {

  const handleShare = () => {
    const url = `${window.location.origin}/tracking?speed=${speed}`;
    navigator.clipboard.writeText(url).then(() => {
      alert('URL copied to clipboard!');
    });
  };
  return (
    <div className='slider-container'>
      <div className='speed-range'>
        <input
          type='range'
          min='1'
          max='100'
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <label>Speed: {speed}</label>
      </div>

      <button onClick={handleShare}>Share</button>
    </div>
  );
};

export default SpeedSlider;
