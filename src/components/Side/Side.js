import React, { Component } from 'react';
import './side.css'

class Side extends Component {
    
    
    handleScroll = (e) =>{
        const side = document.getElementsByClassName("sideContainer");
        const yPoint = window.pageYOffset;
        if(yPoint > 80){
            side[0].classList.add("scroll");
            // console.log(side);
        }else{
            side[0].classList.remove("scroll");
        }
    }

    handleClick = (e) => {
        const root = document.getElementById("root");
        if(root){
            console.log(e);
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
        // window.addEventListener("click", this.handleClick);
    }

    render() {
        const avatar = this.props.avatar;

        return (
            <div className="sideContainer">
                <div className="profile">
                    <div className="profileContainer">
                        <div className="photo" role="button">
                            <a className="box">
                                <img src={avatar}></img>
                            </a>
                        </div>
                        <div className="id">1</div>

                    </div>
                </div>
                <div className="story">1</div>
                <div className="recommend">1</div>
                <div className="info">1</div>
            </div>
        );
    }
}

export default Side;