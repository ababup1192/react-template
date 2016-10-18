import * as React from "react";
import * as ReactDOM from "react-dom";

interface IAppProps {
    message: string;
}

interface IAppState {
    clicked: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
    }

    handledClick(e) {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        const message = this.state.clicked ? this.props.message : "Click ME!";

        return <h1 onClick={(e) => this.handledClick(e)}>{message}</h1>;
    }
}