import { useState } from "react"

export default function Team(){

    const teamStyle = {
        border: '2px solid orange',
        margin: '15px',
        padding: '10px',
        borderRadius: '10px'
    }
const [team, setTeam] = useState(0)
const addPlayer = ()=>{
    if(team < 11){
        const newPlayer = team + 1;
        setTeam(newPlayer);
    }
}
const removPlayer = ()=>{
    if(team > 0){
        const newPlayer = team - 1;
        setTeam(newPlayer);
    }
}


    return(
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removPlayer}>Remove</button>
        </div>
    )
}