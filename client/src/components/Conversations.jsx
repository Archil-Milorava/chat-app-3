import useGetConversations from "../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <div>loading... </div>
      ) : (
        conversations.map((conversation) => (
          <Conversation conversation={conversation} key={conversation._id} nickName={conversation.nickName} createdAt={conversation.createdAt} profilePic={conversation.profilePic} />
        ))
      )}
    </div>
  );
};
export default Conversations;
