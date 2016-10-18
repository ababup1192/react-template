import * as React from "react";
import * as ReactDOM from "react-dom";
import { List } from "immutable";

interface IAppProps {
    upperList: List<number>;
    lowerList: List<number>;
}

interface IAppState {
    upperList: List<number>;
    lowerList: List<number>;
}

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props) {
        super(props);
        this.state = props;
    }

    handledClickUpper(e, key: number) {
        // 状態(List)の変更
        const upperList = this.state.upperList.filterNot((l) => l == key).toList();
        const lowerList = this.state.lowerList.push(key);

        this.setState({ upperList: upperList, lowerList: lowerList });
    }

    handledClickLower(e, key: number) {
        // 状態(List)の変更
        const upperList = this.state.upperList.push(key);
        const lowerList = this.state.lowerList.filterNot((l) => l == key).toList();

        this.setState({ upperList: upperList, lowerList: lowerList });
    }

    render() {
        // Listの生成
        const upperList = <ul className="upperList">
            {this.state.upperList.map((l) =>
                <li
                    key={l}
                    onClick={(e) => this.handledClickUpper(e, l)}>
                    {l}
                </li>)
            }
        </ul>;

        const lowerList = <ul className="lowerList">
            {this.state.lowerList.map((l) =>
                <li
                    key={l}
                    onClick={(e) => this.handledClickLower(e, l)}>
                    {l}
                </li>)
            }
        </ul>;

        return <div className="listContainer">
            {upperList}
            {lowerList}
        </div>;
    }
}