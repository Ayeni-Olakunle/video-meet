import React from 'react';
import LandingPageStyle from "./Landing-Page.module.scss"
import { Button } from 'react-bootstrap';
import landImage from "../../image/Prototyping process-pana.png"
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate()
    const move = () => {
        navigate("create-meeting")
    }
    const move2 = () => {
        navigate("join-meeting")
    }
    return (
        <div className={LandingPageStyle.holdAll}>
            <div className={LandingPageStyle.holdImage}>
                <img src={landImage} className={LandingPageStyle.image} alt="Landing" />
            </div>
            <div className={LandingPageStyle.holdButton}>
                <Button variant="success" onClick={move}>
                    Create Meeting
                </Button>
                <Button variant="primary" onClick={move2}>
                    Join Meeting
                </Button>
            </div>
        </div>
    );
}

export default LandingPage;