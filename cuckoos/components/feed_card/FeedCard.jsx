import React from "react";
import CardProfilePic from "./card_profile_pic/CardProfilePic";
import CardUserInfo from "./card_user_info/CardUserInfo";
import CardPost from "./card_post/CardPost";
import CardAction from "./card_action/CardAction";

const FeedCard = ({item}) => {
  const {userProfile,name,user,postTime,postText,imgUrl,like,reply,retweet,bookMark}=item
  return (
    <div className="flex w-full p-4 gap-4 items-start border-b-2 border-gray-500 cursor-pointer dark:hover:bg-gray-950 transition-all">
      <div>
      <CardProfilePic userProfile={userProfile}/>
      </div>
      <div className="flex flex-col gap-4">
        <CardUserInfo name={name} user={user} postTime={postTime}/>
        <CardPost imgUrl={imgUrl} postText={postText}/>
        <div>
          <CardAction like={like} reply={reply} retweet={retweet} bookMark={bookMark}/>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
