import PlayerBadge from "../components/PlayerBadge";

export default function RightPanel(props) {
    return (
        <div className="right panel">
            {props.players.map(player => <PlayerBadge key={player.playerName} name={player.playerName} img={player.playerImg}/> )}
        </div>
    )
}