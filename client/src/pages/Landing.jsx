import { div, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles(() => ({
  left: {
    padding: "1.9rem",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
    alignItems: "left",
  },
  right: {
    padding: "0rem",
    width: "100%",
    height: "100%",
  },
  btn: {
    backgroundColor: "grey",
    color: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      border: "1px solid black",
    },
  },
  bannerResponsive: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width:1000px)": {
      display: "flex",
      flexDirection: "column",
      margin: "7rem",
      fontSize: "1rem",
      // color: "white",
    },
  },
}));
const Landing = () => {
  const classes = useStyle();
  return (
    <div
      style={{
        marginBlock: "4rem",
        paddingInline: "3.6rem",
        paddingBlockStart: "3.6rem",
        backgroundColor: "transparent",
        backgroundImage: "https://www.linkpicture.com/q/5667004.jpg",
      }}
    >
      <div className={classes.bannerResponsive}>
        <div className={classes.left} style={{ flex: "1" }}>
          <div>
            <h1
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                paddingBlock: "0.8rem",
                fontSize: "4rem",
              }}
            >
              Transforming Aircraft Sustainability
            </h1>
          </div>
          <div>
            <h4
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                color: "grey",
                paddingBlock: "0.8rem",
              }}
            >
              Connect, Repurpose, Recycle
            </h4>
          </div>
          <div>
            <a href="/home">
              <Button
                className={classes.btn}
                style={{
                  textTransform: "none",
                  marginBlock: "0.8rem",
                  fontSize: "1rem",
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                  paddingInline: "3rem",
                }}
              >
                <div style={{ position: "relative" }}> Click Here</div>
              </Button>
            </a>
          </div>
        </div>
        <div className={classes.right} style={{ flex: "1" }}>
          <div>
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              src="https://raw.githubusercontent.com/AnuragRoshan/Aerothon/285ded84c056c6693fec48b8fcf529cc590909e5/client/public/Diagrams/aircraft3.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
