import * as React from "react";
import * as ReactDOM from "react-dom";

interface IFizzBuzzElementProps {
    content: string;
}

export default class FizzBuzzElement extends React.Component<IFizzBuzzElementProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const {content} = this.props;
        const fizzbuzzClass = isFinite(content as any) ? "numberElement" : content;

        return <li className={fizzbuzzClass}>{content}</li>;
    }
}