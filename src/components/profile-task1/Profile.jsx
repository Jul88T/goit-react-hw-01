import styles from "./profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  const altText = "User avatar";
  return (
    <div className={styles["profile-container"]}>
      {" "}
      {/* Застосовуємо стилі з CSS модуля */}
      <div className={styles["profile-header"]}>
        <img src={image} alt={altText} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles["profile-stats"]}>
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
