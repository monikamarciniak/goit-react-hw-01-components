import PropTypes from 'prop-types';
import ProfileCSS from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={ProfileCSS.profile}>
      <div className={ProfileCSS.description}>
        <img src={avatar} alt="User avatar" className={ProfileCSS.avatar} />
        <p className={ProfileCSS.name}>{username}</p>
        <p className={ProfileCSS.tag}>{tag}</p>
        <p className={ProfileCSS.location}>{location}</p>
      </div>
      <ul className={ProfileCSS.stats}>
        {[
          [1, 'Followers', stats.followers],
          [2, 'Views', stats.views.toLocaleString('en')],
          [3, 'Likes', stats.likes],
        ].map(([id, string, value]) => (
          <li key={id} className={ProfileCSS.item}>
            <span className={ProfileCSS.label}>{string}</span>
            <span className={ProfileCSS.quantity}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
