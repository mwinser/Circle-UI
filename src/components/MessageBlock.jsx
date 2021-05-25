export default function MessageBlock(props) {
    return(
        <div className="message-block">
            <div className="message-avatar">
                <img alt={`${props.name} avatar`} src={props.img}/>
            </div>
            <div className="message-content">
                <h3>{props.name}</h3>
                <p>{props.message}</p>
            </div>
        </div>
    )
}