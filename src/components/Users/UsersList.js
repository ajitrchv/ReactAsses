import React from "react";
import Card from "../UI/card";
import classes from './Userslist.module.css'
function UsersList(props) {
  return (
      <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li>
          {user.name} ({user.age})
        </li>
      ))}
    </ul>
    </Card>
  );
}
export default UsersList;
