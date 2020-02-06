import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SpongeBobCard from "./components/SpongeBobCard";
import SquidwardCard from "./components/SquidwardCard";
import MrKrabsCard from "./components/MrKrabsCard";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

function App() {
  const friendCardArray = friends.map(friend=>{
    return <FriendCard name={friend.name} image={friend.image} job={friend.occupation} house={friend.location}/>
  })
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {/* <SpongeBobCard />
      <MrKrabsCard />
      <SquidwardCard /> */}
      {/* <FriendCard name={friends[0].name} image={friends[0].image} job={friends[0].occupation} house={friends[0].location}/>
      <FriendCard name={friends[1].name} image={friends[1].image} job={friends[1].occupation} house={friends[1].location}/>
      <FriendCard name={friends[2].name} image={friends[2].image} job={friends[2].occupation} house={friends[2].location}/> */}
      {/* {friendCardArray} */}
     {friends.map((friend,index)=><FriendCard key={index}name={friend.name} image={friend.image} job={friend.occupation} house={friend.location}/>)}
    </Wrapper>
  );
}

export default App;
