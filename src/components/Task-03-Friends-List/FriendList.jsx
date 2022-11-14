import { FriendListItem } from './FriendListItem';
import FriendListCSS from './friendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul className={FriendListCSS.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendListItem
                        key={id}
                        name={name}
                        avatar={avatar}
                        isOnline={isOnline}
                    />
                )
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    ),
};