import ProfileEditor from '../components/ProfileEditor';

export default function Create() {
  const handleSave = (data) => {
    console.log('Збережено:', data);
  };

  return (
    <div className="container mx-auto px-4">
      <ProfileEditor onSave={handleSave} />
    </div>
  );
}
