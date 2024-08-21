import React from "react";
import PersonInfo from "./PersonInfo";
import SocialLinks from "./SocialLinks";

export default function SocialCard(props) {
  const { socialLinksList } = props;

  return (
    <div className="flex flex-col bg-[#1f1f1f] p-2 rounded-lg">
      <PersonInfo {...props} />
      <ul className="flex flex-col gap-4 p-5">
        {socialLinksList.map((socialLink, socialLinkIndex) => {
            return (
                <SocialLinks key={socialLinkIndex}>
                    <p>{socialLink}</p>
                </SocialLinks>
            )
        })}
      </ul>
    </div>
  );
}
