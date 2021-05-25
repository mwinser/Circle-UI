import MessageBlock from "./MessageBlock";

export default function MessageTimeline(props){
    const timeline = [
        {playerName: "Michelle", message:"Benjamin, I just wanted to reach out because I love your energy and you seem really cool but we haven't had a chance to have a private conversation yet. What was it like growing up in Ohio?"},
        {playerName: "Benjamin", message:"Thanks for reaching out, Michelle! I love your energy, too. I put Sandusky as my hometown, but I grew up in a military family so I was only there for a couple years in HS. What's DC like? #armybrat"}
    ]
    return(
        <div className="message-history">
            {timeline.map((item, index)=><MessageBlock key={item + index} name={item.playerName} message={item.message} img={props.players.filter(player=>player.playerName===item.playerName)[0].playerImg} />)}
        </div>
    )
}