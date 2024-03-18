import style from './FriendListItem.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={style.friendItem}>
      <img className={style.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={style.friendName}>{name}</p>
      <p className={style[isOnline ? 'online' : 'offline']}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendListItem;
