import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Signup.css";

class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    dob: null,
    contact: "",
    email: "",
    password: "",
    error: {
      firstnameError: "",
      lastnameError: "",
      dobError: "",
      contactError: "",
      emailError: "",
      passwordError: "",
    },
    formIsValid: false,
  };

  handleChange = (id, value) => {
    if (id == "firstname") {
      this.validateFirstName(value);
    }
    if (id == "lastname") {
      this.validateLastName(value);
    }
    if (id == "dob") {
      this.validateDOB(value);
    }
    if (id == "contact") {
      this.validateContact(value);
    }
    if (id == "email") {
      this.validateEmail(value);
    }
    if (id == "password") {
      this.validatePassword(value);
    }
  };

  validateFirstName(firstname) {
    let formIsValid = this.state.formIsValid;
    let firstnameError = this.state.error.firstnameError;
    let alphabets = /^[A-Za-z ]+$/;

    if (firstname.trim() === "") {
      formIsValid = false;
      firstnameError = "This is required";
    } else if (firstname.trim().length < 3) {
      formIsValid = false;
      firstnameError = "Minimum of 3 characters are required";
    } else if (!alphabets.test(firstname)) {
      firstnameError = "Enter alphabets only";
      formIsValid = false;
    } else {
      firstnameError = "";
      formIsValid = true;
    }

    this.setState({
      firstname,
      formIsValid,
      error: { ...this.state.error, firstnameError },
    });

    return formIsValid;
  }
  validateLastName(lastname) {
    let formIsValid = this.state.formIsValid;
    let lastnameError = this.state.error.lastnameError;
    let alphabets = /^[A-Za-z ]+$/;

    if (lastname.trim() === "") {
      formIsValid = false;
      lastnameError = "This is required";
    } else if (lastname.trim().length < 3) {
      formIsValid = false;
      lastnameError = "Minimum of 3 characters are required";
    } else if (!alphabets.test(lastname)) {
      lastnameError = "Enter alphabets only";
      formIsValid = false;
    } else {
      lastnameError = "";
      formIsValid = true;
    }

    this.setState({
      lastname,
      formIsValid,
      error: { ...this.state.error, lastnameError },
    });

    return formIsValid;
  }

  validateDOB(dob) {
    let formIsValid = this.state.formIsValid;
    let dobError = this.state.error.emailError;
    let today = new Date(Date.now());
    let dobInput = new Date(dob);

    if (dob == "" || dob == null) {
      formIsValid = false;
      dobError = "This is required";
    } else if (today < dobInput) {
      formIsValid = false;
      dobError = "Date of birth should not exceed the date today";
    } else {
      formIsValid = true;
      dobError = "";
    }

    this.setState({
      dob,
      formIsValid,
      error: { ...this.state.error, dobError },
    });

    return formIsValid;
  }

  validateEmail = (email) => {
    let formIsValid = this.state.formIsValid;
    let emailError = this.state.error.emailError;

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email == "") {
      formIsValid = false;
      emailError = "This is required";
    } else if (!pattern.test(email)) {
      emailError = "Please enter a valid email address";
      formIsValid = false;
    } else {
      emailError = "";
      formIsValid = true;
    }

    this.setState({
      email,
      formIsValid,
      error: { ...this.state.error, emailError },
    });

    return formIsValid;
  };

  validateContact = (contact) => {
    let formIsValid = this.state.formIsValid;
    let contactError = this.state.error.contactError;
    let numbers = /^[0-9]*$/;
    let alphabets = /^[A-Za-z]+$/;
    let pattern = /[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/;

    if (contact.trim() == "") {
      contactError = "This is required";
      formIsValid = false;
    } else if (numbers.test(contact)) {
      if (contact.trim().length != 10) {
        contactError = "Contact number should be 10 digits";
        formIsValid = false;
      } else {
        contactError = "";
        formIsValid = true;
      }
    } else if (alphabets.test(contact) || pattern.test(contact)) {
      contactError = "Enter a valid contact number";
      formIsValid = false;
    } else {
      contactError = "";
      formIsValid = true;
    }

    this.setState({
      contact,
      formIsValid,
      error: { ...this.state.error, contactError },
    });

    return formIsValid;
  };

  validatePassword(password) {
    let formIsValid = this.state.formIsValid;
    let passwordError = this.state.error.passwordError;

    if (password.trim() == "") {
      formIsValid = false;
      passwordError = "This is required";
    } else {
      formIsValid = true;
      passwordError = "";
    }

    this.setState({
      password,
      formIsValid,
      error: { ...this.state.passwordError, passwordError },
    });

    return formIsValid;
  }

  handeSubmit = (e) => {
    e.preventDefault();

    if (
      this.validateFirstName(this.state.firstname) &&
      this.validateLastName(this.state.lastname) &&
      this.validateDOB(this.state.dob) &&
      this.validateContact(this.state.contact) &&
      this.validateEmail(this.state.email) &&
      this.validatePassword(this.state.password)
    ) {
      // alert("Form is submitted");
      M.toast({ html: "You have signed up successfully!", classes: "rounded" });

      this.setState({
        firstname: "",
        lastname: "",
        dob: null,
        contact: "",
        email: "",
        password: "",
        formIsValid: false,
      });
    }
  };

  render() {
    return (
      <>
        <div id="signUpContainer">
          <div>
            <h1>Sign up</h1>
          </div>
          <div className="formContainer">
            <Card sx={{ minWidth: 275 }}>
              <CardContent style={{ padding: "20px" }}>
                <form onSubmit={this.handeSubmit}>
                  <div>
                    <TextField
                      className="inputField"
                      id="firstname"
                      value={this.state.firstname}
                      onChange={(e) => {
                        this.handleChange("firstname", e.target.value);
                      }}
                      label="First Name"
                      variant="outlined"
                      style={{ width: 300 }}
                    />
                    <p className="errorMsg">
                      {this.state.error.firstnameError}
                    </p>
                  </div>

                  <div>
                    <TextField
                      id="lastname"
                      value={this.state.lastname}
                      onChange={(e) => {
                        this.handleChange("lastname", e.target.value);
                      }}
                      label="Last Name"
                      variant="outlined"
                      style={{ width: 300 }}
                    />
                    <p className="errorMsg">{this.state.error.lastnameError}</p>
                  </div>

                  <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        id="dob"
                        label="Date of Birth"
                        value={this.state.dob}
                        onChange={(value) => {
                          this.handleChange("dob", value);
                        }}
                        renderInput={(params) => (
                          <TextField style={{ width: 300 }} {...params} />
                        )}
                      />
                    </LocalizationProvider>
                    <p className="errorMsg">{this.state.error.dobError}</p>
                  </div>

                  <div>
                    <TextField
                      id="contact"
                      value={this.state.contact}
                      onChange={(e) => {
                        this.handleChange("contact", e.target.value);
                      }}
                      label="Contact Number"
                      variant="outlined"
                      style={{ width: 300 }}
                    />
                    <p className="errorMsg">{this.state.error.contactError}</p>
                  </div>

                  <div>
                    <TextField
                      id="email"
                      value={this.state.email}
                      onChange={(e) => {
                        this.handleChange("email", e.target.value);
                      }}
                      label="Email Address"
                      variant="outlined"
                      style={{ width: 300 }}
                    />
                    <p className="errorMsg">{this.state.error.emailError}</p>
                  </div>

                  <div>
                    <TextField
                      id="password"
                      value={this.state.password}
                      onChange={(e) => {
                        this.handleChange("password", e.target.value);
                      }}
                      label="Password"
                      variant="outlined"
                      style={{ width: 300 }}
                      type="password"
                    />
                    <p className="errorMsg">{this.state.error.passwordError}</p>
                  </div>

                  <div id="submitContainer">
                    <Button onClick={this.handeSubmit} variant="outlined">
                      Submit
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;
