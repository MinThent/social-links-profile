import SocialCard from "./components/SocialCard";

function App() {
  const socialLinksList = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ];

  const personInfo = {
    name: "Jessica Randall",
    city: "London",
    country: "United Kingdom",
    description: "\"Front-end developer and avid reader.\"",
    avatar: "/avatar-jessica.jpeg",
    avatarAlt: "jessica avatar"
  }

  return (
    <div className="flex justify-center items-center bg-[#141414] min-h-screen">
      <SocialCard socialLinksList={socialLinksList} personInfo = {personInfo} />
    </div>
  );
}

export default App;
