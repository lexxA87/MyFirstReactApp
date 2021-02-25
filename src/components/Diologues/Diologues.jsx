import { NavLink } from 'react-router-dom';
import s from './Diologues.module.css';

const DiologItem = (props) => {
    
    let path = "/messages/" + props.id;
    
    return (
        <div className={s.item}>
                    <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
                </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Diologues = (props) =>{
    return (
        <div className={s.diologs}>
            <div className={s.diologsItems}>

                <DiologItem name="Lexx" id="1" />
                <DiologItem name="Lexx2" id="2" />
                <DiologItem name="Lexx3" id="3" />
                <DiologItem name="Lexx4" id="4" />
                <DiologItem name="Lexx5" id="5" />

                
            </div>
            <div className={s.messages}>
                <Message message="Hi!" />
                <Message message="How are you?" />
                <Message message="Welcome to React!" />
                <Message message="Yooooo!" />
                <Message message="What are you doing?" />
            </div>
        </div>
    )
};

export default Diologues;