import React, { useState } from "react";
import rocketimg from "..//images/Rocketimg.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import fbicon from "..//images/_Facebook.png";
import googleicon from "..//images/_Google.png";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "animate.css";
import "./login.css";
import HeaderBootstap from "./mainheader";

const Signup = () => {
  const [nameerror, setnameerror] = useState(false);
  const [confirm_password_error, setconfirm_password_error] = useState(false);
  const [phonenumbererror, setphonenumbererror] = useState(false);
  const [phnumber, setphnumber] = useState();
  const [showPassword, setShowPassword] = React.useState(false);
  const [userRegister, setuserRegister] = useState({
    email: "",
    password: "",
    username: "",
    confirm_password: "",
  });
  const [showerror, setShowerror] = useState(false);
  const [showerrorpasword, setshowerrorpasword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleinput = (e) => {
    // console.log(e);
    const name = e?.target.name;
    const value = e?.target.value;

    // console.log(name,value)
    setuserRegister({ ...userRegister, [name]: value });
  };
  const handleSubmit = (e) => {
    e?.preventDefault();
    if (userRegister?.password.length < 8) {
      setshowerrorpasword(true);
      // alert("password must be greater than 8 characters")
      return;
    }
    if (phnumber?.length !== 13) {
      setphonenumbererror(true);
      return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(userRegister.username)) {
      setnameerror(true);
      return;
    }
    if (userRegister.password !== userRegister.confirm_password) {
      setconfirm_password_error(true);

      return;
    }

    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        userRegister?.email
      )
    ) {
      setShowerror(true);
      // alert('Please enter a valid email address');
      return;
    }
    alert("Form Submitted");
    setShowerror(false);
    setshowerrorpasword(false);
    setphonenumbererror(false);
    setconfirm_password_error(false);
    setnameerror(false);
    
  };

  console.log(phnumber?.length);

  return (
    <>
    <div>
      <HeaderBootstap/>
    </div>
      <form action="" onSubmit={handleSubmit}>
        {/* main div */}
        <div className="grid md:grid-cols-2 sm:grid-cols-1 md:mt-20 md:ml-10 sm:m-20  ">
          {/* login part */}

          <div className=" ">
            <div className="flex flex-col  justify-end ">
              <div className="text-center">
                <h1
                  className="text-4xl sm:text-2xl font-bold "
                  style={{ color: "#0B223F" }}
                >
                  {" "}
                  Welcome To Plentys
                </h1>
              </div>
              <div>
                <p
                  className="text-md sm:text-sm text-center"
                  style={{ color: "#94A3B8" }}
                >
                  Create an account
                </p>
              </div>

              <div className=" md:ml-20 mt-8  " style={{ color: "#0B223F" }}>
                <p
                  className="font-bold text-sm mb-1  w-100 text-start"
                  style={{ color: "#0B223F" }}
                >
                  Name
                </p>
                <TextField
                  className="w-full "
                  id="outlined-size-small"
                  size="small"
                  placeholder="Name"
                  name="username"
                  onChange={handleinput}
                  value={userRegister.username}
                  autoComplete={false}
                  required
                />
                {nameerror && (
                  <p
                    className=" text-sm   w-100 text-start"
                    style={{ color: "red" }}
                  >
                    Please enter a valid name
                  </p>
                )}
              </div>

              <div className="  md:ml-20 mt-8  " style={{ color: "#0B223F" }}>
                <p
                  className="font-bold text-sm mb-1  w-100 text-start"
                  style={{ color: "#0B223F" }}
                >
                  Phone Number
                </p>

                <div className="phone-input-container">
                  <PhoneInput
                    style={{ height: "30px" }}
                    defaultCountry="PK"
                    required
                    className="border rounded p-2 "
                    international
                    value={phnumber}
                    onChange={setphnumber}
                  />
                </div>
                {phonenumbererror && (
                  <p
                    className=" text-sm   w-100 text-start"
                    style={{ color: "red" }}
                  >
                    Please enter a valid number
                  </p>
                )}
              </div>

              <div className=" md:ml-20 mt-8  " style={{ color: "#0B223F" }}>
                <p
                  className="font-bold text-sm mb-1  w-100 text-start"
                  style={{ color: "#0B223F" }}
                >
                  Enter your email or Phone number
                </p>
                <TextField
                  className="w-full "
                  id="outlined-size-small"
                  size="small"
                  placeholder="Enter your email  or Phone number"
                  name="email"
                  onChange={handleinput}
                  value={userRegister.email}
                  required
                />
                {showerror && (
                  <p
                    className=" text-sm   w-100 text-start"
                    style={{ color: "red" }}
                  >
                    Please enter a valid email addres
                  </p>
                )}
              </div>

              <div className=" md:ml-20  mt-8  " style={{ color: "#0B223F" }}>
                <p
                  className="font-bold text-sm mb-1  w-100 text-start"
                  style={{ color: "#0B223F" }}
                >
                  Password
                </p>
                {/* password btinput */}
                <FormControl sx={{ width: "100%" }}>
                  {/* <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel> */}
                  <OutlinedInput
                    required
                    name="password"
                    onChange={handleinput}
                    value={userRegister.password}
                    hiddenLabel={false}
                    size="small"
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    // label="Password"
                    placeholder="Password"
                  />
                </FormControl>
                {showerrorpasword && (
                  <p
                    className=" text-sm   w-100 text-start"
                    style={{ color: "red" }}
                  >
                    password must be greater than 8 characters
                  </p>
                )}
              </div>

              <div className=" md:ml-20  mt-8  " style={{ color: "#0B223F" }}>
                <p
                  className="font-bold text-sm mb-1  w-100 text-start"
                  style={{ color: "#0B223F" }}
                >
                  Confirm Password
                </p>
                {/* password btinput */}
                <FormControl sx={{ width: "100%" }}>
                  {/* <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel> */}
                  <OutlinedInput
                    required
                    name="confirm_password"
                    onChange={handleinput}
                    value={userRegister.confirm_password}
                    hiddenLabel={false}
                    size="small"
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    // label="Password"
                    placeholder="Confirm Password"
                  />
                </FormControl>
                {confirm_password_error && (
                  <p
                    className=" text-sm   w-100 text-start"
                    style={{ color: "red" }}
                  >
                    password not matched
                  </p>
                )}
              </div>

              <div className="mt-1 flex justify-end text-blue-900 text-sm italic underline :hover cursor-pointer">
                <div>
                  <p>forget password?</p>
                </div>
              </div>

              <div className=" md:ml-20  mt-8  ">
                <Button
                  type="submit"
                  sx={{ width: "100%" }}
                  variant="contained"
                  id="submit"
                >
                  Sign in
                </Button>
              </div>

              <div className="  md:ml-20   mt-8">
                <div className="grid justify-items-center gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4">
                  <div className="w-100 grid justify-items-center   ">
                    <Button
                      style={{ width: "100%" }}
                      size="small"
                      variant="outlined"
                      // startIcon={<Google />}
                      className=""
                    >
                      <img src={googleicon} alt="" className="mr-2" />
                      Sign in with Google
                    </Button>
                  </div>
                  <div className="w-100 grid justify-items-center">
                    <Button
                      style={{ width: "100%" }}
                      size="small"
                      variant="outlined"
                      // startIcon={<Google />}
                    >
                      <img src={fbicon} alt="" className="mr-2" />
                      Sign in with Facebook
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <p style={{ color: "black" }}>
                  Already have an account?
                  <Link to="/login">
                    <span className="text-blue-400 cursor-pointer">
                      {" "}
                      Sign in
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* imagepart */}
          <div className="flex justify-center sm:invisible md:visible mt-6">
            <div
              style={{ padding: "4px" }}
              className="flex justify-center mt-6"
            >
              <div className="mt-10  h-50" style={{ marginBottom: "" }}>
                <div
                  className="animate__animated animate__bounce animate__infinite infinite animate__slower"
                  style={{
                    position: "relative",
                    top: "20px",
                    bottom: "30px",
                    display: "inline-block",
                  }}
                >
                  <img
                    style={{ width: "80%", height: "" }}
                    src={rocketimg}
                    alt="Rocket"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="border "></div>
    </>
  );
};

export default Signup;
