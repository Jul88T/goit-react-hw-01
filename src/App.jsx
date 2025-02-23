import "./App.css";
import "./components/profile-task1/profile.module.css";
import "./components/friends-task2/friends.module.css";

import Profile from "./components/profile-task1/Profile.jsx";
import FriendList from "./components/friends-task2/FriendList.jsx";
import TransactionHistory from "./components/transactions-task3/TransactionHistory.jsx";

import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
