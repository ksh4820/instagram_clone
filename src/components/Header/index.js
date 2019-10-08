import React from 'react';
import './Header.css';

class index extends React.Component {

    handleScroll = () => {
        const nav = document.querySelector(".Nav");
        const yPoint = window.pageYOffset;
        if(yPoint > 80){
            nav.classList.add("NavScroll");
            console.log("@2");
        }else{
            nav.classList.remove("NavScroll");
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <nav className="Nav">
                <div className="Nav-menus">
                    <div className="Nav-brand">
                        <a className="Nav-brand-logo" href="/">
                            Instagram
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default index;