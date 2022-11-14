import PropTypes from 'prop-types';
import StatsCSS from './stats.module.css';

export const Stats = ({ title, stats }) => {
    return (<section className={StatsCSS.statistics}>
        {/* Warunek, żeby h2 wyświetlał się tylko wtedy, gdy nie tytuł nie będzie pusty. Jak tytuł będzie pusty to pominie h2 - nagłówek h2 nie wyrenderuje się!*/}
        {title = null ? "" : <h2 className={StatsCSS.title}>{title}</h2>}
        <ul className={StatsCSS.statList}>
            {stats.map(({ id, label, percentage }) => (
                <li
                    className={StatsCSS.item}
                    key={id}
                    style={{ backgroundColor: myBackgroundColor }}
                    /*style={{ backgroundColor: randomColorInHex() }}*/
                >
                    <span className={StatsCSS.label} style={{ color: myTextColor }}>{label}</span>
                    <span className={StatsCSS.percentage} style={{ color: myTextColor }}>{percentage}%</span>
                </li>
            ))}
        </ul>
    </section >
    )
}

/* Funkcja na całkowicie losowy kolor w HEX: Zrezygnowałem z niej, bo czasami są niwidoczne napisy

const randomColorInHex = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

*/

const myBackgroundColor = '#007aff';
const myTextColor = '#fff';

Stats.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};