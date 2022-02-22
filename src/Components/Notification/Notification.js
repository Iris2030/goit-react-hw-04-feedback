import propTypes from "prop-types";
import s from "./Notification.module.css";

export default function Notification({message}){
    return <span className={s.message} >{message}</span>
}

Notification.propTypes ={
    message: propTypes.string.isRequired,
}