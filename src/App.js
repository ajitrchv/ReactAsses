import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setusersList] = useState([]);

  const addUserHandler = (uName, uAge, uId) => {
    console.log(uName, uAge, uId);
    setusersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, key: Math.random() }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
