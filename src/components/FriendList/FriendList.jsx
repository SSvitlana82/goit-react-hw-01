import FriendListItem from '../FriendListItem/FriendListItem';
import style from './FriendList.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(item => {
        return (
          <li key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList;
