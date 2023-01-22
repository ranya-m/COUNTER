
import {Component} from "react";
import "./likedislike.css";
import * as Unicons from '@iconscout/react-unicons';

class PhotoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            dislikes: 0,
        };
    };

        handleClickLike() {
            let value = this.state.likes;
            this.setState({likes: value + 1})
        }

        handleClickDislike() {
            let value = this.state.dislikes;
            this.setState({dislikes: value + 1})
        }

        render() {
            return (
              <>
                <div id="bodyCover">

                    <div id="photoBox">

                        <div id="photo">
                            <img src={this.props.src}
                                onDoubleClick={() => {
                                this.handleClickLike();
                                }}  
                            />
                        </div>

                        <div id="buttons">
                                <button id="likebtn"
                                    onClick={() => {
                                        this.handleClickLike();
                                    }}
                                    >
                                    <Unicons.UilThumbsUp />
                                </button>

                                <button id="dislikebtn"
                                onClick={() => {
                                    this.handleClickDislike();

                                }}
                                >
                                <Unicons.UilThumbsDown />
                                </button>  
                        </div>

                        
                        <div id="numbers">
                        <h3 id="likesnb">{this.state.likes} likes</h3>
                        <h3 id="dislikesnb">{this.state.dislikes} dislikes</h3>
                        </div>   
                         
                    </div>
                </div>
              
              </> 
            )
        }
}


export default PhotoBox;