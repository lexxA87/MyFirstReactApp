import s from './../Diologues.module.css';
import { NavLink } from 'react-router-dom';


const DiologItem = (props) => {
    
    let path = "/messages/" + props.id;
    
    return (
        <div className={s.item}>
                    <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
                </div>
    );
}

export  default DiologItem;