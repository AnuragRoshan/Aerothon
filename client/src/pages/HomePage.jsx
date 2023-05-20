import React from "react";
import Manufacturer from "./Manufacturer";
import Airlines from "./Airlines";
import Recycle from "./Recycle";
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
              <Manufacturer user={user} />
            </>
          ) : (
            <>
              {t.userType == "airline" ? (
                <Airlines user={user} />
              ) : (
                <Recycle user={user} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default homePage;
