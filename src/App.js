import { useEffect, useRef, useState } from 'react';
import video from './assets/video.mp4';
import ad from './assets/ad.jpg';
function App() {
  const videoRef = useRef(null);
  const [adFlag, setAdFlag] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const showAd = () => {
      if (video.currentTime >= 10) {
        console.log(video.currentTime);
        video.pause();
        setAdFlag(true);
        video.removeEventListener('timeupdate', showAd);
      }
    };
    video.addEventListener('timeupdate', showAd);
    video.addEventListener('play', () => {
      setAdFlag(false);
    });
  }, []);
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <video
        src={video}
        controls={true}
        ref={videoRef}
        height={'400px'}
      ></video>
      {adFlag && (
        <img
          src={ad}
          style={{
            zIndex: '10',
            height: '200px',
            width: '300px',
            position: 'absolute',
          }}
        ></img>
      )}
    </div>
  );
}

export default App;
