import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState({
    Name: "",
    surname: "",
    gender: "",
    dob: Number,
    email: "",
    phone: "",
    team: "",
    experience: "",
    skills: "",
    languages: [],
  });

  //handle the onchange
  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "radio") {
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    } else if (type === "checkbox") {
      // Handle checkboxes
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: e.target.checked
          ? [...(prevDetails[name] || []), value]
          : (prevDetails[name] || []).filter((lang) => lang !== value),
      }));
    } else {
      // For other input types, update the value directly
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  // handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    setUserDetails({
      Name: "",
    surname: "",
    gender: "",
    dob: 'Number',
    email: "",
    phone: "",
    team: "",
    experience: "",
    skills: "",
    languages: [],

    });
  };

  return (
    <div className="App">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        {/* name  and surname box */}
        <div className="name-div">
          <div className="box">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              name="Name"
              value={userDetails.Name}
              onChange={handleOnChange}
            />
          </div>
          <div className="box">
            <label>Surname:</label>
            <input
              type="text"
              placeholder="Enter your surname"
              required
              name="surname"
              value={userDetails.surname}
              onChange={handleOnChange}
            />
          </div>
        </div>

        {/* gender and dob box */}

        <div className="name-div">
          <div className="d-flex box">
            <div>
              <label>Gender:</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleOnChange}
                checked={userDetails.gender === "male"}
              />
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleOnChange}
                checked={userDetails.gender === "female"}
              />
              <label>Female</label>
            </div>
          </div>

          <div className="box">
            <label>Date of birth</label>
            <input
              type="date"
              name="dob"
              onChange={handleOnChange}
              value={userDetails.dob}
              required
            />
          </div>
        </div>

        {/* email and phone number box */}

        <div className="name-div">
          <div className="box">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={userDetails.email}
              onChange={handleOnChange}
            />
          </div>

          <div className="box">
            <label>Phone:</label>
            <input
              type="text"
              pattern="[0-9]+"
              name="phone"
              placeholder="enter your number"
              value={userDetails.phone}
              onChange={handleOnChange}
            />
          </div>
        </div>

        {/* skills box */}

        <div className="name-div">
          <div className="box">
            <label>Team</label>
            <select
              name="team"
              className="select-team"
              onChange={handleOnChange}
              value={userDetails.team}
            >
              <option value="none">none</option>
              <option value="frontend">frontend</option>
              <option value="backend">backend</option>
              <option value="database">database</option>
            </select>
          </div>

          <div className="box">
            <input
              type="radio"
              name="experience"
              value="fresher"
              onChange={handleOnChange}
              checked={userDetails.experience === "fresher"}
            />
            <label>Fresher</label>

            <input
              type="radio"
              name="experience"
              value="experienced"
              onChange={handleOnChange}
              checked={userDetails.experience === "experienced"}
            />
            <label>Experienced</label>
          </div>
        </div>

        {/* skills box */}

        <div className="name-div">
          <div className="box">
            <label>Skills</label>
            <input
              type="text"
              name="skills"
              placeholder="Enter your skills"
              required
              onChange={handleOnChange}
              value={userDetails.skills}
            />
          </div>

          <div className="box">
            <label>languages:</label>

            <input
              type="checkbox"
              value="English"
              name="languages"
              onChange={handleOnChange}
              checked={userDetails.languages.includes("English") || false}
            />
            <label>English</label>

            <input
              type="checkbox"
              value="Hindi"
              name="languages"
              onChange={handleOnChange}
              checked={userDetails.languages.includes("Hindi") || false}
            />
            <label>Hindi</label>
          </div>
        </div>

        {/* submit button */}
        <div className="name-div">
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
