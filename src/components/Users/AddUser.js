import React, { useState } from "react";
import Card from "../UI/card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import UsersList from "./UsersList";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");



  function addUserHandler(event) {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
    {
      alert('Details Invalid');
      return
    }
    if(+enteredAge < 1)
    {
      alert('Add an age greater than 0.')
      return;
    }

    console.log(enteredAge, enteredUsername)
    setEnteredUsername('');
    setEnteredAge('');
  }

  function usernameChangeHandler(event){
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event){
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} placeholder="Enter the username." />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} placeholder="Enter the age in years" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
export default AddUser;
