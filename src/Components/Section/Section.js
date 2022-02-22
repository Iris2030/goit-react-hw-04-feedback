
import s from "./Section.module.css";
import PropTypes from "prop-types";

export default function Section({children,title}){
return  <div>
<h2 className={s.title}>{title}</h2>
{children}
</div>
}

Section.propTypes={
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
 
}