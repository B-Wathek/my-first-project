import { Fragment } from "react";
import Feature from "./Components/Feature";
import Header from "./Components/Header";
import Home from "./Components/Home";
export default function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <Feature />
    </Fragment>
  );
}
