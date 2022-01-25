import { render } from "@testing-library/react";
import { useEffect, useState } from "react";

function Profile({ user, setUser }) {
  const [createdAt, setCreatedAt] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const res = await fetch(`http://localhost/user/${user.id}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data)
        setCreatedAt(data.createdAt);
      };

      const fetchCards = async () => {
        const res = await fetch(`http://localhost/cards/allcards`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data)
        setName(data.data[0].name);
        setDescription(data.data[0].description);
      };
  
      try {
        fetchData();
        fetchCards();
      } catch (error) {
        console.log(error);
      }
    }

  }, [user]);
  return (
    <div className="text">
      <h1>{user ? user.username : ""}</h1>
      <h1>{createdAt}</h1>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>hello</p>
    </div>
  );
}

export default Profile;
