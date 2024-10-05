import React, { useEffect, useState } from "react";
import "./contact.css";

const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [userErr, setUserErr] = useState({
    firstNameErr: false,
    lastNameErr: false,
    emailErr: false,
    passwordErr: false,
    confirmPasswordErr: false,
  });

  console.log(userErr);

  const signInHandler = (e) => {
    e.preventDefault();

    if (userDetails.firstname === "" && userDetails.lastname === "" && userDetails.email === "" && userDetails.password === "" && userDetails.confirmpassword === "") {
      setUserErr({firstNameErr: true, lastNameErr: true, emailErr: true, passwordErr: true, confirmPasswordErr: true  });
    }

    console.log(userDetails);
  };

  useEffect(() => {
    if (userDetails.email !== "") {
      setUserErr({ ...userErr, emailErr: false });
    }

    if (userDetails.password !== "") {
      setUserErr({ ...userErr, passwordErr: false });
    }
    if (userDetails.firstname !== "") {
      setUserErr({ ...userErr, firstNameErr: false });
    }
    if (userDetails.lastname !== "") {
      setUserErr({ ...userErr, lastNameErr: false });
    }
    if (userDetails.confirmpassword !== "") {
      setUserErr({ ...userErr, confirmPasswordErr: false });
    }
  }, [userDetails]);

  return (
    <div>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={signInHandler}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating mt-4">
            <h5>First Name</h5>
            <input
              type="name"
              value={userDetails.firstname}
              style={{ border: userErr.firstNameErr && "1px solid red" }}
              onChange={(e) => {
                setUserDetails({ ...userDetails, firstname: e.target.value });
              }}
              className="form-control"
              id="floatingFirstName"
              placeholder="first name"
            />

            {userErr.firstNameErr && (
              <span className="text-danger">Enter you First Name</span>
            )}
          </div>

          <div className="form-floating mt-4">
            <h5>Last Name</h5>
            <input
              type="text"
              value={userDetails.lastname}
              style={{ border: userErr.lastNameErr && "1px solid red" }}
              className="form-control"
              id="floatingLastName"
              placeholder="last name"
              onChange={(e) => {
                setUserDetails({ ...userDetails, lastname: e.target.value });
              }}
            />

            {userErr.lastNameErr && (
              <span className="text-danger">Enter your Last Name</span>
            )}
          </div>

          <div className="form-floating mt-4">
            <h5>Email Address</h5>

            <input
              type="email"
              style={{ border: userErr.emailErr && "1px solid red" }}
              value={userDetails.email}
              className="form-control"
              id="floatingEmail"
              placeholder="name@example.com"
              onChange={(e) => {
                setUserDetails({ ...userDetails, email: e.target.value });
              }}
            />

            {userErr.emailErr && (
              <span className="text-danger">Enter your Email</span>
            )}
          </div>

          <div className="form-floating mt-4">
            <h5>Password</h5>
            <input
              type="password"
              style={{ border: userErr.passwordErr && "1px solid red" }}
              value={userDetails.password}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => {
                setUserDetails({ ...userDetails, password: e.target.value });
              }}
            />

            {userErr.passwordErr && (
              <span className="text-danger">Enter Password</span>
            )}
            
          </div>

          <div className="form-floating mt-4">
            <h5>Confirm Password</h5>
            <input
              type="password"
              style={{ border: userErr.confirmPasswordErr && "1px solid red" }}
              value={userDetails.confirmpassword}
              className="form-control"
              id="floatingConfirmPassword"
              placeholder="Password"
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  confirmpassword: e.target.value,
                });
              }}
            />

            {userErr.confirmPasswordErr && (
              <span className="text-danger">Confirm Password</span>
            )}
          </div>

          <button className="btn btn-primary w-100 py-2 mt-4" type="submit">
            Sign in
          </button>
        </form>
      </main>
    </div>
 

    
  );
};

export default Contact;
