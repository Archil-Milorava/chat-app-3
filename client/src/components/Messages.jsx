import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  const { messages } = useGetMessages();

  if (!messages || messages.length === 0) {
    return (
      <p className="h-screen w-full flex items-center justify-center">
        Send a message
      </p>
    );
  }

  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.map((message) => (
        <Message key={message._id} message={message.message} senderId={message.senderId} />
      ))}
    </div>
  );
};

export default Messages;
