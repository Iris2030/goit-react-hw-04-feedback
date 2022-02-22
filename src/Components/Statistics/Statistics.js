import s from './Statistics.module.css'
import PropTypes from "prop-types";

export default function Statistics({good,neutral,bad,feadback, total}){

   return <div>
   <ul>
    <li className={s.stats}>Good:{good}</li>
    <li className={s.stats}>Neutral:{neutral}</li>
    <li className={s.stats}>Bad:{bad}</li>
    <li className={s.stats}>Total:{total}</li>
    <li className={s.stats}>Positive feadback:{feadback}%</li>
    </ul>
    </div>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    feadback: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
}