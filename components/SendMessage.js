import { useState } from "react";
import { useMoralis } from "react-moralis";
function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className="flex fixed w-11/12 bottom-10 bg-black opacity-80 px-6 py-6 max-w-2xl shaow-xl rounded-full border-4 border-blue-400">
      <input
        className=" flex-grow outline-none bg-transparent text-white placeholder-gray-500"
        placeholder={`Enter a message ${user.getUsername()}...`}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold text-pink-500"
      >
        send
      </button>
    </form>
  );
}

export default SendMessage;
