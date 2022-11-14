import PropTypes from 'prop-types';
import FriendsCSS from './Friends.module.css';

export const FriendList = ({ friends }) => {
  const liRender = friends.map(friend => {
    return (
      <li key={friend.id} className={FriendsCSS.item}>
        <span
          className={
            friend.isOnline
              ? FriendsCSS.statusActive
              : FriendsCSS.statusInactive
          }
        ></span>

        <img
          className={FriendsCSS.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={FriendsCSS.name}>{friend.name}</p>
      </li>
    );
  });
  return <ul className={FriendsCSS.friendList}>{liRender}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
