import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import db from './firebase'

function SidebarChat({id,name,addNewChat}) {
    const [seed,setSeed]=useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat =()=>{
        const roomName=prompt("please enter name...")

        if(roomName){
            db.collection('Rooms').add({
                name:roomName
            })

        }
    }
    return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarchat_info">
    <h2>{name}</h2>
                <p>This is last msg</p>

            </div>
            
        </div>

    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}


export default SidebarChat