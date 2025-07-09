import Profile from './Profile';
import Links from './Links';
import './App.css';
import SocialStats from './SocialStats';

const profileData = {
  image: './images/main/avoig (9).png',
  name: 'ยินดีต้อนรับสู่ช่องฉลาม',
};

const linksData = [
  { label: 'โดเรมอน ให้ฉลาม', url: 'https://tipme.in.th/52905c0fb27dabeb9180a974', className: 'donate' },
  { label: 'YouTube', url: 'https://www.youtube.com/@AVOx2', className: 'youtube' },
  { label: 'Discord', url: 'https://discord.gg/RAT849UR', className: 'discord' },
  { label: 'TikTok', url: 'https://www.tiktok.com/@dopomnoyx?is_from_webapp=1&sender_device=pc', className: 'tiktok' },
  { label: 'ซื้อของที่ฉลามใช้', url: 'https://avoxssr.github.io/shop.html', className: 'shop' },
  { label: 'Instagram', url: 'https://www.instagram.com/dopomnoyna/', className: 'instagram' },
];

export default function App() {
  return (
    <main className="container">
      <Profile {...profileData} />
      <SocialStats />
      <Links links={linksData} />
    </main>
  );
}
