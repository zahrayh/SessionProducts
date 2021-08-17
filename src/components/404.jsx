import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    const timerID = setInterval(() => {
      history.push("/");
    }, 5000);

    // returning a cleanup function
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h1>404</h1>
    </div>
  );
};

export default NotFound;
