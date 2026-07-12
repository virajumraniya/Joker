import { use, useState } from "react";

export default function Form() {
  // let [fullName, setFullName] = useState("");
  // let [userName, setUserName] = useState("");
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };

  // let handleUserName = (event) => {
  //   setUserName(event.target.value);
  // };

  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;

    setFormData((currData) => {
      // currData[fieldName] = newValue; // <--- COMPUTED PROPERTY NAME
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name: </label>
      <input
        type="text"
        placeholder="Enter Full Name"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullname"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="username">User Name: </label>
      <input
        type="text"
        placeholder="Enter User Name"
        value={formData.userName}
        onChange={handleInputChange}
        id="username"
        name="userName"
      />
      <br /><br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <br />
      <button>submit</button>
    </form>
  );
}
