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
    
    let diologs = [
        {name: "Lexx", id: "1"},
        {name: "Lexx2", id: "2"},
        {name: "Lexx3", id: "3"},
        {name: "Lexx4", id: "4"},
        {name: "Lexx5", id: "5"}
    ]
    let messages = [
        {mesaage: "Hi!"},
        {message: "How are you?"},
        {message: "Welcome to React!"},
        {message: "Yooooo!"},
        {message: "What are you doing?!"},
        {message: "What's up?!"}
    ]

    let diologsElements = diologs.map( d => <DiologItem name={d.name} id={d.id} />)

    let messagesElements = messages.map( m => <Message message={m.message} />)
    
    return (
        <div className={s.diologs}>
            <div className={s.diologsItems}>

                { diologsElements }

                
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Diologues;