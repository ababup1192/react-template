import * as React from "react";
import * as ReactDOM from "react-dom";

interface IFizzBuzzInputProps {
    fizz: number;
    buzz: number;
    handleFizzChange: (max: number) => void;
    handleBuzzChange: (buzz: number) => void;
}

interface IFizzBuzzInputState {
    fizz: number;
    buzz: number;
}

export default class MaxInput extends React.Component<IFizzBuzzInputProps, IFizzBuzzInputState> {
    constructor(props) {
        super(props);

        const {fizz, buzz} = this.props;
        this.state = { fizz, buzz };
    }

    render() {
        const { handleFizzChange, handleBuzzChange } = this.props;
        const state = this.state;

        return <div className="fizzbuzzInputs">
            <div id="fizzContainer">
                <label>Fizz</label>
                <input
                    type="number"
                    value={this.state.fizz}
                    onChange={(e: any) => {
                        const fizz = Number(e.target.value);
                        handleFizzChange(fizz);
                        this.setState({ ...state, fizz });
                    } } />
            </div>
            <div id="buzzContainer">
                <label>Buzz</label>
                <input
                    type="number"
                    value={this.state.buzz}
                    onChange={(e: any) => {
                        const buzz = Number(e.target.value);
                        handleBuzzChange(buzz);
                        this.setState({ ...state, buzz });
                    } } />
            </div>
        </div>;
    }
}