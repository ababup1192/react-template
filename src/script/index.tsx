// import Style Sheet
import "../style/main.css";

import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App max={100} fizz={3} buzz={5} />, document.getElementById("content"));