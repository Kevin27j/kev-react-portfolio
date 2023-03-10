import React from "react";
import "./HomePage.css";
import Container from 'react-bootstrap/Container';
import avatar from '../../assets/ebf58acd35044d75e3e5827aaade058c.jpeg'


function Home() {
    return (
        <div className="homepage">
            <Container>
                <img className="profile-avatar" src={avatar} alt="avatar" />
                <div className="profile-statement">
                    <h1 className="title">H3LL0 FR13ND</h1>
                    <div className="sub-statement">
                        <h3>I'm Kejvin</h3>
                        <p>Enthusiastic junior web developer learning how to build websites and webapps</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Home;