import React from "react";
import Alert from "./components/Alert";
import NameHeader from './components/NameHeader'

function App() {
  return (
    <div>
      <Alert type="danger">Invalid user id or password</Alert>
      <Alert type="warning">Hi Everybody!</Alert>
      <Alert />
      <NameHeader userName="Joe"/>
      <NameHeader userName="Aslan"/>
      <NameHeader/>
    </div>
  );
}

export default App;
