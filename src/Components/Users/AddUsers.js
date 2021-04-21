import React, { useState } from "react";
import Card from "../Ui/Card";
import classes from "./AddUser.module.css";
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";
const AddUsers = (props) => {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please  enter a valid name and age (non-empty values)",
      });

      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please  enter a valid age (>=1)",
      });
      return;
    }

    console.log(enteredUserAge, enteredUserName);
    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUsername("");
    setEnteredUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Name</label>
          <input
            autoComplete='off'
            value={enteredUserName}
            onChange={userNameChangeHandler}
            id='username'
            type='text'
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            autoComplete='off'
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
            id='userage'
            type='text'
          />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
