import {React, useState} from 'react'
import MessageBox from "../components/MessageBox";
import MessageTimeline from "../components/MessageTimeline";

export default function MainPanel(props) {
    const [timeline, setTimeline] = useState([
        {playerName: "Michelle", message:"Benjamin, I just wanted to reach out because I love your energy and you seem really cool but we haven't had a chance to have a private conversation yet. What was it like growing up in Ohio?"},
        {playerName: "Benjamin", message:"Thanks for reaching out, Michelle! I love your energy, too. I put Sandusky as my hometown, but I grew up in a military family so I was only there for a couple years in HS. What's DC like? #armybrat"}
    ])
    function updateTimeline(submission) {
        setTimeline(prevTimeline=>[...prevTimeline, {playerName: "Benjamin", message: submission}])
    }
    
    return (
        <div className="main panel">
            <MessageTimeline timeline={timeline} players={props.players}/>
            <MessageBox updateTimeline={updateTimeline}/>
        </div>
    )
}