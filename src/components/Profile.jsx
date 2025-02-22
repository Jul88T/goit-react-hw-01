export default function Profile({ name, tag, location, image, stats }) {
  const altText = "User avatar";
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={image} alt={altText} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="profile-stats">
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
