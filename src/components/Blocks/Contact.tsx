import React, { useState } from "react";
import SendIcon from "../icons/sendIcon";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        subject,
        message
      });
      alert(response.data.message);
      
      // Clear form after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
  }

  return <div className="flex flex-col gap-4">
    <div className="flex flex-col gap-2">
      <p className="text-2xl font-bold mb-2" id="Contact">
        Contact
      </p>
      <div className="w-[75px] h-[6px] rounded-full bg-[#64ffda]" />
    </div>
    <div className="flex flex-col gap-4">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <InputBox placeholder="Name" value={name} onChange={handleNameChange} />
          <InputBox placeholder="Email" value={email} onChange={handleEmailChange} />
        </div>
        <InputBox placeholder="Subject" value={subject} onChange={handleSubjectChange} />
        <div className="h-64">
          <textarea
            placeholder="Message"
            value={message}
            onChange={handleMessageChange}
            className={`rounded-xl border-[1px] border-neutral-700 bg-neutral-900/80 cursor-pointer p-4 w-full h-full focus:outline-none resize-none ${message ? "focus:border-[#64ffda]" : "focus:border-red-500"}`}
            style={{ textAlign: "left", verticalAlign: "top" }}
          />
        </div>
        <div className="flex flex-row items-center justify-end">
          <div className="rounded-xl bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-800 p-[1.25px] shadow-lg flex items-center justify-center">
            <button type="submit" className="rounded-xl font-semibold text-[#64ffda] bg-neutral-900/80 flex flex-row gap-2 items-center cursor-pointer p-4 w-full h-full focus:outline-none"> <div className="w-5 h-5"><SendIcon /></div> Send Message</button>
          </div>
        </div>
      </form>
    </div>
  </div>;
};

function InputBox({ placeholder, value, onChange }: { placeholder: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`rounded-xl border-[1px] border-neutral-700 bg-neutral-900/80 cursor-pointer p-4 w-full h-full focus:outline-none ${value ? "focus:border-[#64ffda]" : "focus:border-red-500"} placeholder:text-left`}
            style={{ textAlign: "left" }}
        />
    );
}

export default Contact; 