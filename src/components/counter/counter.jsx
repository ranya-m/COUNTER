
import {Component} from "react";
import "./counter.css";


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            // background: 'linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)'
        };
    };

        handleClick() {
            let value = this.state.count;
            this.setState({count: value + 1})
        }

        handleClick2() {
            let value = this.state.count;
            this.setState({count: value - 1})
        }

        // backgroundRed() {
        //     <body style={{background: 'linear-gradient(to right, #e52d27, #b31217)'}}/>
        // }

        // backgroundBlue() {
        //     <body style={{background: 'linear-gradient(to right, #2193b0, #6dd5ed)'}}/>
        // }
             

        render() {
            return (
              <>
                <div id="bodyCover"
                    style={{
                        background:
                            (this.state.count) >= 10 ? 'linear-gradient(to right, #e52d27, #b31217)'
                            : (this.state.count) <= -10 ? 'linear-gradient(to right, #2193b0, #6dd5ed)'
                            : 'linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996)'
                    }}>

                    <div id="counterBox">
                        <h1>{this.state.count}</h1>
                        <button
                            onClick={() => {
                                this.handleClick();
                            }}
                            >
                            Incremente
                        </button>

                        <button
                            onClick={() => {
                                this.handleClick2();

                            }}
                            >
                            Decremente
                        </button>              
                        <h2> Keep clicking to change <br></br> the background's temperature !</h2> 
                    </div>
                </div>
              
              </> 
            )
        }
}


export default Counter;