import "./App.css"
import { useState } from "react"
import Message from "./components/Message"
import ChatBox from "./components/ChatBox"
import { MessageContext } from "./MessageContext"
import { OnlineContext } from "./OnlineContext"

function App() {
  const [messages, setMessages] = useState([])
  const [isWriting, setIsWriting] = useState(false)
  const [isOnline, setIsOnline] = useState([
    {
      user: "user1",
      isOnline: false,
    },
    {
      user: "user2",
      isOnline: false,
    },
  ])
  return (
    <OnlineContext.Provider value={{ isOnline, setIsOnline }}>
      <MessageContext.Provider value={{ messages, setMessages }}>
        <div className="App">
          <section>
            <section>
              {messages.map((message) => (
                <Message
                  thisIs="user1"
                  user={message.user}
                  text={message.message}
                />
              ))}
            </section>
            <section>
              <ChatBox
                user="user1"
                isWriting={isWriting}
                setIsWriting={setIsWriting}
              />
            </section>
          </section>
          <section>
            <section>
              {messages.map((message) => (
                <Message
                  thisIs="user2"
                  user={message.user}
                  text={message.message}
                />
              ))}
            </section>
            <section>
              <ChatBox
                user="user2"
                isWriting={isWriting}
                setIsWriting={setIsWriting}
              />
            </section>
          </section>
        </div>
      </MessageContext.Provider>
    </OnlineContext.Provider>
  )
}

export default App
