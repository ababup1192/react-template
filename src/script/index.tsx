// import Style Sheet
import "../style/main.css";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";

// import main typescript
import App from "./components/App";

// keyが属性, valueが値としてpropsになる。
const lists = {
    upperList: List.of(0, 1, 2, 3, 4),
    lowerList: List.of(5, 6, 7, 8, 9)
};

ReactDOM.render(<App {...lists} />, document.getElementById("content"));