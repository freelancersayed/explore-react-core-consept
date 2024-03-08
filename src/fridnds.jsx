import { useState } from 'react'
import './friends.css'
import Friend from './Friend';

export default function Friends(){

    const [friends, setFriends] = useState([]);
    useState(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    } ,[])

    return(
        <div className='box'>
           
           <h3 className='box'>Friends: {friends.length}</h3>
           
        {
            friends.map(friend => <Friend friend={friend}></Friend>)
        }
        </div>
    )
}