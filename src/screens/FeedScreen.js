import React from "react";
import { ScrollView } from "react-native";
import FeedPost from "../components/FeedPost";


const post1 = {
    id: "p1",
    createdAt: "19 m", 
    User: {
      id: "u1",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
      name: "Vadim Savin",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
    numberOfLikes: 11,
    numberOfShares: 2,
  };
  
  const post2 = {
    id: "p2",
    createdAt: "10 m", 
    User: {
      id: "u2",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
      name: "Elon Musk",
    },
    description: "Today we launched another rocket 🚀",
    numberOfLikes: 11,
    numberOfShares: 2,
  };
  const post3 = {
    id: "p2",
    createdAt: "10 m", 
    User: {
      id: "u2",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
      name: "Jeff",
    },
    description: "View from my office 😍",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/5.jpeg",
    numberOfLikes: 11,
    numberOfShares: 2,
  };

const FeedScreen = () => {
  return (
    <ScrollView>
      <FeedPost post={post1} />
      <FeedPost post={post2} />
      <FeedPost post={post3} />
    </ScrollView>
  );
};

export default FeedScreen;
