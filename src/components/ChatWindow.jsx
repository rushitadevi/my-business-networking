import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
import io from "socket.io-client";

class ChatWindow extends Component {
    socket = null;
    constructor() {
        super();
        this.state = {
          messageList: []
        };
      }

      componentDidMount()
      {
        const connOpts = {
            transports: ["websocket"]
          };
          this.socket = io("https://striveschool.herokuapp.com/", connOpts);
          this.socket.on("ko", msg => {
          this.setState(
          {
            messageList: this.state.messageList.concat(msg)
          },
        
        () => {
          window.scrollTo(0, document.body.scrollHeight);
         
        }
      );
    });
    
      }

     
      _onMessageWasSent(message) {
        this.setState({
          messageList: [...this.state.messageList, message]
        })
      }
     
      _sendMessage(text) {
        if (text.length > 0) {
          this.setState({
            messageList: [...this.state.messageList, {
              author: 'them',
              type: 'text',
              data: { text }
            }]
          })
        }
      }

      

    render() { 
       
        return (
            <div>
      <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>
          );
    }
}
 
export default ChatWindow;