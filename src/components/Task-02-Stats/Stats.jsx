import PropTypes from 'prop-types';
import StatsCSS from './stats.module.css';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

export const Stats = ({ title, stats }) => {
    return (<section className={StatsCSS.statistics}>
        
        {title = null ? "" : <h2 className={StatsCSS.title}>{title}</h2>}
        <ul className={StatsCSS.statList}>
            {stats.map(({ id, label, percentage }) => (
                <li
                    className={StatsCSS.item}
                    key={id}
                    style={{ backgroundColor: getRandomHexColor(),
            }}
            
                >
                    <span className={StatsCSS.label} style={{ color: myTextColor }}>{label}</span>
                    <span className={StatsCSS.percentage} style={{ color: myTextColor }}>{percentage}%</span>
                </li>
            ))}
        </ul>
    </section >
    )
}


const myTextColor = '#fff';

Stats.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};