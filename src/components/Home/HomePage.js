import React from "react";
import "./HomePage.css";
import Container from 'react-bootstrap/Container';
import avatar from '../../assets/ebf58acd35044d75e3e5827aaade058c.jpeg'


function Home(props) {
    return (
        <div className="homepage">
            <Container>
                <img className="profile-avatar" src={avatar} alt="avatar" />
                <div className="profile-statement">
                    <h1>H3LL0 FR13ND</h1>
                    <h6>I'm Kejvin Pashaj</h6>
                    <p>Enthusiastic junior web developer learning how to build websites and webapps</p>
                </div>
            </Container>
        </div>
    )
}

export default Home;