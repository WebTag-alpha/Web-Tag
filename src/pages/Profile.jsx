import ProfileCard from '../components/ProfileCard';

export default function Profile() {
  const fakeData = {
    name: 'Гліб',
    bio: 'Frontend developer | Solana enthusiast',
    links: [
      { label: 'GitHub', url: 'https://github.com' },
      { label: 'Telegram', url: 'https://t.me' }
    ]
  };

  return (
    <div className="container mx-auto px-4">
      <ProfileCard {...fakeData} />
    </div>
  );
}
