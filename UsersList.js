import React from 'react';
const UsersList = (props) => {
  return (
    <div className="new">
      <ul>
        {props.userss.map((user) => (
          <li key={Math.random.id}>
            {user.name} {user.age} {user.collage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;