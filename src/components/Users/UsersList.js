import React from "react";
import Card from "../UI/card";
import classes from './Userslist.module.css'
function UsersList(props) {
  return (
      <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.key}>
          {user.name} ({user.age} Years old)
        </li>
      ))}
    </ul>
    </Card>
  );

}
export default UsersList;
