import s from './../Diologues.module.css';

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

export default Message;