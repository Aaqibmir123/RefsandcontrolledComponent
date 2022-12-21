import React, { useState, useRef } from 'react';

import Wrapper from './Wrapper';
import AddingErrorModel from './AddingErrorModel';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collage=useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const collageValue=collage.current.value;
    
    
    if (enteredName.trim().length === 0 ||
     enteredUserAge.trim().length === 0 || collageValue.trim().length===0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',

      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });

      if (collageValue < 1) {
        setError({
          newMessage:"ivalid input"
        });

      return;
    }
  }
    props.ondata(enteredName, enteredUserAge,collageValue);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collageValue.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <AddingErrorModel
          title={error.title}
          message={error.message}
          collage={error.newMessage}
          onConfirm={errorHandler}
        />
      )}
      <div className="new">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <label>Collagename</label>
          <input type="text" ref={collage} />
          <button type="submit">Add User</button>
        </form>
      </div>
    </Wrapper>
  );
}


export default AddUser;