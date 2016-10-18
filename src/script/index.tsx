// import Style Sheet
import "../style/main.css";

import * as React from "react";
import * as ReactDOM from "react-dom";

// import main typescript
import App from "./components/App";

const appNode = document.getElementById("content");

ReactDOM.render(<App />, appNode);