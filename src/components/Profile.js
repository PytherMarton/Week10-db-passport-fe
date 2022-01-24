import { useEffect, useState } from "react";

function Profile({ user, setUser }) {
  const [createdAt, setCreatedAt] = useState("");

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
  
      try {
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }

  }, [user]);

  return (
    <>
      <h1>{user ? user.username : ""}</h1>
      <p>Profile</p>
      <h1>{createdAt}</h1>
    </>
  );
}

export default Profile;
