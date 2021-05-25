export default function PlayerBadge (props) {
    
    
    return(
    <div className="player-card">
        <div className="player-badge">
            <div className="player-avatar">
                <img alt={`${props.name} Badge`} src={props.img}/>
            </div>
            <div className="player-name">
                {props.name}
            </div>
        </div>
    </div>
    )
}