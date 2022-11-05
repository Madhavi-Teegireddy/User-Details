import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, getSingleUser } from "../redux/actions";

const EditUser = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.usersData);

  const [state, setState] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = React.useState("");

  const { name, email, phone, address } = state;

  React.useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  React.useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    console.log("e:", e);
    e.preventDefault();
    if (!name || !address || !phone || !email) {
      setError("Please Enter The Values to all feild");
    } else {
      dispatch(editUser(state, id));
      navigate("/");
      setError("");
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <Button onClick={() => navigate("/")} variant="contained" color="secondary">
        Go Back
      </Button>

      <h1> Edit User</h1>

      {error && <h2 style={{ color: "red" }}>{error}</h2>}

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField onChange={handleChange} name="name" id="standard-basic" label="Name" variant="standard" value={name || ""} type="text" />
        <br></br>

        <TextField onChange={handleChange} name="email" id="standard-basic" label="Email" variant="standard" value={email || ""} type="email" />
        <br></br>

        <TextField onChange={handleChange} name="phone" id="standard-basic" label="Contact" variant="standard" value={phone || ""} type="number" />
        <br></br>

        <TextField onChange={handleChange} name="address" id="standard-basic" label="Address" variant="standard" value={address || ""} type="text" />
        <br></br>
        <Button type="submit" variant="contained" color="primary">
          Updata
        </Button>
      </Box>
    </div>
  );
};

export default EditUser;