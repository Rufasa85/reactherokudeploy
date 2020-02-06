import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads
const styles = {
  headerStyles:{
    backgroundColor:"red",
  },
  h1Styles:{
    fontSize:"100px"
  }
}
function Header() {
  return (
    <header className="header" style={styles.headerStyles}>
      <h1 style={styles.h1Styles}>Welcome</h1>
    </header>
  );
}

export default Header;
