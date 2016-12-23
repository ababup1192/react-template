import * as React from "react";
import * as ReactDOM from "react-dom";

interface IMaxInputProps {
    max: number;
    handleMaxChange: (max: number) => void;
}

interface IMaxInputState {
    max: number;
}

export default class MaxInput extends React.Component<IMaxInputProps, IMaxInputState> {
    constructor(props) {
        super(props);

        const max = this.props.max;
        this.state = { max };
    }

    render() {
        const handleMaxChange = this.props.handleMaxChange;

        return <div>
            <label>1 -</label>
            <input
                type="number"
                value={this.state.max}
                onChange={(e: any) => {
                    const max = Number(e.target.value);
                    const validatedMax = Math.abs(max) > 1000 ? 1000 : Math.abs(max);
                    handleMaxChange(validatedMax);
                    this.setState({ max: validatedMax });
                } } />
        </div>;
    }
}