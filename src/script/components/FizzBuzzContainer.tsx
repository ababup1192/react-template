import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";
import FizzBuzzElement from "./FizzBuzzElement";

interface IFizzBuzzContainerProps {
    list: List<number>;
    fizz: number;
    buzz: number;
}

export default class FizzBuzzContainer extends React.Component<IFizzBuzzContainerProps, {}> {
    constructor(props) {
        super(props);
    }

    private fizzBuzzList(): List<string> {
        const {fizz, buzz} = this.props;
        const fizzbuzz = fizz * buzz;

        return this.props.list.map((n) =>
            n % fizzbuzz === 0 ? "fizzbuzz" :
            n % fizz === 0 ? "fizz" :
            n % buzz === 0 ? "buzz" :
            n.toString()
        ).toList();
    }

    render() {
        return <ul className="fizzBuzzList">
            {this.fizzBuzzList().map((c, i) =>
                <FizzBuzzElement key={i} content={c} />
            )}
        </ul>;
    }
}