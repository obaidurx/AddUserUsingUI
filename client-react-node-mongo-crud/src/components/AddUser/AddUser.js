import React, { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const handleUser = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name, email };

    fetch("http://localhost:5000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added the user");
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Please Add User</h2>
      <form onSubmit={handleUser}>
        <input type="text" ref={nameRef} placeholder="Your name" />
        <input type="text" ref={emailRef} placeholder="Your email" />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddUser;
