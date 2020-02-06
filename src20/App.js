import React from "react";
import FriendCard from "./components/FriendCard";
import { statement } from "@babel/template";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component{
  state = {
    friends:friends
  }

  handleDelete=(id)=>{
    // const newFriends = [];
    // for (let i = 0; i < this.state.friends.length; i++) {
    //   const element = this.state.friends[i];
    //   if(element.id!==id){
    //     newFriends.push(element);
    //   }
      
    // }
    const newFriends = this.state.friends.filter(friend=>{
      return friend.id !== id
    })
    this.setState({friends:newFriends})
  }

  render(){
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(friendData=><FriendCard key={friendData.id} id={friendData.id} handleDelete = {this.handleDelete} name={friendData.name} image={friendData.image} occupation={friendData.occupation} location={friendData.location}/>)}
      </Wrapper>
    );
  }
}

// function App() {
//   return (
//     <Wrapper>
//       <h1 className="title">Friends List</h1>
//       <FriendCard
//         name={friends[0].name}
//         image={friends[0].image}
//         occupation={friends[0].occupation}
//         location={friends[0].location}
//       />
//       <FriendCard
//         name={friends[1].name}
//         image={friends[1].image}
//         occupation={friends[1].occupation}
//         location={friends[1].location}
//       />
//       <FriendCard
//         name={friends[2].name}
//         image={friends[2].image}
//         occupation={friends[2].occupation}
//         location={friends[2].location}
//       />
//     </Wrapper>
//   );
// }

export default App;
