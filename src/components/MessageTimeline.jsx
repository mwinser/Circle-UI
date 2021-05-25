import {React} from 'react'
import MessageBlock from "./MessageBlock";

export default function MessageTimeline(props){

    return(
        <div className="message-history">
            {props.timeline.map((item, index)=><MessageBlock key={item + index} name={item.playerName} message={item.message} img={props.players.filter(player=>player.playerName===item.playerName)[0].playerImg} />)}
        </div>
    )
}