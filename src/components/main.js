import React, { useContext } from "react";
import { UserContext } from "../index";

const Main = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h4>Hello {user}</h4>
    </div>
  );
};

export default Main;
