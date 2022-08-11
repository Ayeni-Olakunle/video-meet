import React from 'react';
import LandingPageStyle from "./Landing-Page.module.scss"
import { Button } from 'react-bootstrap';
import { signInWithGoogle } from '../../firebase';
import landImage from "../../image/Prototyping process-pana.png"

function LandingPage() {
    return (
        <div className={LandingPageStyle.holdAll}>
            <div className={LandingPageStyle.holdImage}>
                <img src={landImage} className={LandingPageStyle.image} alt="Landing" />
            </div>
            <div className={LandingPageStyle.holdButton}>
                <Button variant="success" onClick={signInWithGoogle}>
                    Sign in with Google
                </Button>
                <Button variant="primary">
                    Join Meeting
                </Button>
            </div>
        </div>
    );
}

export default LandingPage;