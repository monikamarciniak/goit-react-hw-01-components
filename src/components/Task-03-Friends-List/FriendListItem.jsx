import FriendListItemCSS from './friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={FriendListItemCSS.item}>
            <span
                className={isOnline
                    ? FriendListItemCSS.active
                    : FriendListItemCSS.status}
            >
            </span>
            <img
                className={FriendListItemCSS.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
            />
            <p className={FriendListItemCSS.name}>{name}</p>
        </li>
    );
};
