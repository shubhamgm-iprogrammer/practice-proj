import React, { useState, useRef } from "react";
import Card from "../Ui/Card";
import classes from "./AddUser.module.css";
import Button from "../Ui/Button";
import ErrorModal from "../Ui/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUsers = (props) => {
  const [error, setError] = useState();

  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please  enter a valid name and age (non-empty values)",
      });

      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please  enter a valid age (>=1)",
      });
      return;
    }

    // console.log(enteredAge, enteredName);
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  //   const userNameChangeHandler = (event) => {
  //     setEnteredUsername(event.target.value);
  //   };

  //   const userAgeChangeHandler = (event) => {
  //     setEnteredUserAge(event.target.value);
  //   };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
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
            id='username'
            ref={nameInputRef}
            type='text'
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            autoComplete='off'
            id='userage'
            ref={ageInputRef}
            type='text'
          />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUsers;
