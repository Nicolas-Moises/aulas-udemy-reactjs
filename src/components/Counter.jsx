import React, { Component } from "react";

export default class Counter extends Component {
    state = {
        number: this.props.numberInitial,
    };

    inc = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };
    dec = () => {
        this.setState({
            number: this.state.number - 1,
        });
    };
    mul = () => {
        this.setState({
            number: this.state.number * 3,
        });
    };
    render() {
        return (
            <div className="flex flex-col gap-6 items-center w-full">
                <h1 className="text-zinc-300 font-semibold text-xl">Counter</h1>
                <p className="text-zinc-300 font-bold text-5xl">
                    {this.state.number}
                </p>
                <button
                    onClick={this.inc}
                    className="w-full py-3 px-4 text-zinc-100 bg-violet-600 rounded-lg font-semibold hover:bg-violet-500"
                >
                    Sum 1+
                </button>
                <button
                    onClick={this.dec}
                    className="w-full py-3 px-4 text-zinc-100 bg-violet-600 rounded-lg font-semibold hover:bg-violet-500"
                >
                    Subtract 1-
                </button>
                <button
                    onClick={this.mul}
                    className="w-full py-3 px-4 text-zinc-100 bg-violet-600 rounded-lg font-semibold hover:bg-violet-500"
                >
                    Multiply 3*
                </button>
            </div>
        );
    }
}
