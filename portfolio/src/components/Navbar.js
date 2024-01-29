import linkedIn from './images/linkedIn.png';
import gitHub from './images/github-mark.png';
import { useState } from 'react';

function Navbar () {

    const [activeItem, setActiveItem] = useState(-1);
    let sections = ['Skills', 'Experience', 'Projects'];
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#home">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {sections.map((item, index) => (
                            <a 
                                className={activeItem === index ? "nav-link active" : "nav-link" }
                                href={`#${item.toLowerCase()}`}
                                onMouseEnter={() => {
                                    setActiveItem(index); 
                                }}
                                onMouseLeave={() => {
                                    setActiveItem(-1); 
                                }}
                            >
                                {item} 
                            </a>
                            ))}
                        </div>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a className="nav-social" href="https://www.linkedin.com/in/akhushbakht"> 
                                    <img src={linkedIn} alt="LinkedIn"/>
                                </a>
                                <a className="nav-social" href="https://github.com/akhushba"> 
                                    <img src={gitHub} alt="Github"/>
                                </a>  
                            </div>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;