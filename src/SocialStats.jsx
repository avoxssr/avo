import ytLogo from './assets/yt.svg';
import tiktokLogo from './images/tiktok/tt.png';
import './SocialStats.css';

export default function SocialStats() {
  return (
    <div className="social-stats">
      <a
        href="https://www.youtube.com/@AVOx2"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link youtube"
      >
        <img src={ytLogo} alt="YouTube" className="social-icon" /> 40.9k
      </a>
      <a
        href="https://www.tiktok.com/@dopomnoyx?is_from_webapp=1&sender_device=pc"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link tiktok"
      >
        <img src={tiktokLogo} alt="TikTok" className="social-icon" /> 96.1k
      </a>
    </div>
  );
}
