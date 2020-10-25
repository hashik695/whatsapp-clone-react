import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './Sidebar.css';
import  {SearchOutlined}  from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from './firebase'
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [rooms,setRooms]=useState([])
    const [{user},dispatch]=useStateValue()
    
    useEffect(() => {
       db.collection('Rooms').onSnapshot(snapshot=>(
           setRooms(snapshot.docs.map(doc=>({
               id:doc.id,
               data:doc.data(),

           })))
       ))
    }, [])
    
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search or new chat"/>

                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {rooms.map(room=>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}

            </div>
    
            
        </div>
    )
}

export default Sidebar
