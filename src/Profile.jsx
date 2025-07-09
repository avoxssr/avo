import './Profile.css';

export default function Profile({ image, name, description }) {
  return (
    <section className="profile">
      <img className="profile__image" src={image} alt={name} />
      <h1 className="profile__name">{name}</h1>
      <span className="profile__desc">{description}</span>
    </section>
  );
}
