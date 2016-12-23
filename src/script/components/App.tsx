import * as React from "react";
import * as ReactDOM from "react-dom";
import { List, Range } from "immutable";
import FizzBuzzContainer from "./FizzBuzzContainer";
import MaxInput from "./MaxInput";
import FizzBuzzInput from "./FizzBuzzInput";

interface IAppProps {
    max: number;
    fizz: number;
    buzz: number;
}

interface IAppState {
    list: List<number>;
    fizz: number;
    buzz: number;
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props) {
        super(props);

        const list = Range(1, this.props.max + 1).toList();
        const {fizz, buzz, max} = this.props;

        this.state = { list, fizz, buzz };
    }

    private handleMaxChange(max: number) {
        this.setState({ ...this.state, ...{ list: Range(1, max + 1).toList() } });
    }

    private handlFizzChange(fizz: number) {
        this.setState({ ...this.state, fizz });
    }

    private handlBuzzChange(buzz: number) {
        this.setState({ ...this.state, buzz });
    }

    render() {
        const {max, fizz, buzz} = this.props;

        return <div>
            <div className="fizzbuzzInputs">
                <MaxInput
                    max={max}
                    handleMaxChange={(max) => this.handleMaxChange(max)} />
                <FizzBuzzInput
                    fizz={fizz}
                    buzz={buzz}
                    handleFizzChange={(fizz) => this.handlFizzChange(fizz)}
                    handleBuzzChange={(buzz) => this.handlBuzzChange(buzz)}
                    />
            </div>
            <FizzBuzzContainer {...this.state} />
        </div>;
    }
}