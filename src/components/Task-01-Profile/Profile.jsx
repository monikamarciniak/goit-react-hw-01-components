import PropTypes from 'prop-types';
import ProfileCSS from './profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  /* Funkcja do formatowania liczb (odstęp co tysiąc) w zakresie od 1000 do 9999 */
  /* ponieważ .toLocaleString('pl-PL', {useGrouping:'true'}) działa od 10000 */
  /* przykładowe użycie .toLocaleString('pl-PL', {useGrouping:'true', minimumFractionDigits:'0', maximumFractionDigits:'0', style:'currency', currency:'PLN'}) */
  function numberWithNewMark(n) {
    let parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (parts[1] ? "." + parts[1] : "");
  }

  return <div className={ProfileCSS.profile}>
    <div className={ProfileCSS.description}>
    <img src={avatar} alt="User avatar" className={ProfileCSS.avatar} />
      <p className={ProfileCSS.name}>{username}</p>
      <p className={ProfileCSS.tag}>{tag}</p>
      <p className={ProfileCSS.location}>{location}</p>
    </div>
    <ul className={ProfileCSS.stats}>
      {[
        [1, 'Followers', numberWithNewMark(stats.followers)],
        [2, 'Views', numberWithNewMark(stats.views)],
        [3, 'Likes', numberWithNewMark(stats.likes)],
      ].map(([id, string, value]) => (
        <li key={id} className={ProfileCSS.item}>
          <span className={ProfileCSS.label}>{string}</span>
          <span className={ProfileCSS.quantity}>{value}</span>
        </li>
      ))}
    </ul>
  </div>
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