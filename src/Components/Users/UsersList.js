import React from "react";

import Card from "../Ui/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  // console.log("length>>>>", props.users.length);
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
