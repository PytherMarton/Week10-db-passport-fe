import { useState } from "react";

function Register() {
  const { user, setUser } = useState("");
  const { password, setPassword } = useState("");

  const handleChange = (event) => this.setState({ value: event.target.value });

  return (
    <form>
      <label for="user">User: </label>
      <input
        type="text"
        name="user"
        value={user}
        onChange={handleChange}
      ></input>

      <label for="password">Password: </label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      ></input>

      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default Register;