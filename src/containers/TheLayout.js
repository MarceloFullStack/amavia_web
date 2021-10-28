import jwt from "jsonwebtoken";
import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { TheContent, TheFooter, TheHeader, TheSidebar } from "./index";

const TheLayout = () => {
  const [authenticated, setAuthenticated] = React.useState(true);
  const [user] = React.useState(JSON.parse(localStorage.getItem("user")));


  useEffect(() => {
    var token = '';
    if(user && user.access_token){
      token = user.access_token
    }
    if (!user) {
      setAuthenticated(false);
      localStorage.removeItem("user");
      return <Redirect to={"login"} />;
    }
    jwt.verify(
      token,
      process.env.REACT_APP_JWT_SECRET,
      function (err, decoded) {
        if (err) {
          setAuthenticated(false);
          localStorage.removeItem("user");
          return <Redirect to={"login"} />;
        }
        if (decoded) {
          setAuthenticated(true);
        }
      }
    );
  }, [user]);

  return (
    <div className="c-app c-default-layout">
      <TheSidebar />
      <div className="c-wrapper">
        <TheHeader />
        <div className="c-body">
          <TheContent authenticated={authenticated} />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
