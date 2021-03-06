import React from "react";
import "./Message.css";

type MessageProps = {
    message: string
}

export const Message: React.FC<MessageProps> = ({message}) => {
    return (
        <div className="message_messages-item">
            <img src="https://cdn.pixabay.com/photo/2013/07/13/10/09/ghost-156656_960_720.png" alt=''
                 className='message_messages-item-avatar'/>
            {message}
        </div>
    );
}
