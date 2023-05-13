import React from "react";
import Manufacturer from "./Manufacturer";
import Airlines from "./Airlines";
import Recycle from "./Recycle";
import SignIn from "./LoginSingup/SignIn";
import SignUp from "./LoginSingup/SignUp";

const homePage = ({ user }) => {
  const t = user;
  return (
    <>
      {t == null ? (
        <SignUp />
      ) : (
        <>
          {t.userType == "manufacturer" ? (
            <>
              <Manufacturer />
            </>
          ) : (
            <>{t.userType == "airline" ? <Airlines /> : <Recycle />}</>
          )}
        </>
      )}
    </>
  );
};

export default homePage;
