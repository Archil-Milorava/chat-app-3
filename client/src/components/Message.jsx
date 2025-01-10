const Message = () => {
    return (
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://i.pravatar.cc/300"
              alt="chat bubble"
            />
          </div>
        </div>
        <div
          className={`chat-bubble text-white bg-blue-500 w-auto max-w-[18rem] break-words`}>
          hello what up
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          12:42
        </div>
      </div>
    );
  };
  
  export default Message;
  