import React, { useEffect, useState } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert,SearchOutlined } from '@material-ui/icons'
import './Chat.css'
import  InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

function Chat() {
    const [input,setInput]=useState("")
    const [seed,setSeed]=useState("")

     useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
     }, [])    
    
const sendMessage =(e)=>{
    e.preventDefault()
    
}

    return (
        <div className="chat">
        <div className="chat_header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat_info">
                <h2>Room name</h2>
                <p>Last seen</p>
                </div>
               <div className="chat_right">
               <IconButton>
        <SearchOutlined/>
            </IconButton>
            <IconButton>
            <AttachFile/>
            </IconButton>
            <IconButton>
            <MoreVert/>
            </IconButton>
                    
            </div>

        </div>
        <div className="chat_body">
            
                <p className={`chat_msg ${true && 'chat_rec'}`}>
                    hello
                <span className="chat_name">hashik</span>
                
                <span className="chat_timestamp">3:52pm</span>
                </p>
            
           
        </div>
        <div className="chat_footer">
        <InsertEmoticonIcon/>
        <form>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Enter a Message" type="text"/>
            <button onClick={sendMessage} type="submit" >Sent Message</button>
        </form>
        <MicIcon/>
        </div>
    </div>

    )
}

export default Chat
