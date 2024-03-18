import style from './Profile.module.css';
const Profile = ({ name, tag, location, image, stats }) => {
  console.log(stats);
  return (
    <div className={style.userProfile}>
      <div className={style.userData}>
        <img className={style.userImg} src={image} alt="User avatar" />
        <p className={style.userName}>{name}</p>
        <p className={style.userTag}>@{tag}</p>
        <p className={style.userLocation}>{location}</p>
      </div>

      <ul className={style.userStats}>
        <li className={style.statsItem}>
          <span className={style.statsTitle}>Followers</span>
          <span className={style.statsValue}>{stats.followers}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.statsTitle}>Views</span>
          <span className={style.statsValue}>{stats.views}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.statsTitle}>Likes</span>
          <span className={style.statsValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
