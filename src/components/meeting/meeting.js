import React from 'react';
import meetingStyles from "./meeting.module.scss"
import { AiOutlineSend } from 'react-icons/ai';

function Meeting() {
    return (
        <div className={meetingStyles.holdAll}>
            <div className={meetingStyles.big}>
                <div className={meetingStyles.bigBox}>
                    <div className={meetingStyles.num}>A</div>
                </div>
                <div className={meetingStyles.bigBox}>
                    <div className={meetingStyles.num}>B</div>
                </div>
            </div>
            <div className={meetingStyles.small}>
                <div>
                    <div className={meetingStyles.displayMsg}>
                        <div className={meetingStyles.receivedMsg}>
                            <div className={meetingStyles.receivedBit}>
                                Good Works
                            </div>
                            <p className={meetingStyles.times}>12:00am</p>
                        </div>
                        <div>
                            <div className={meetingStyles.sendMsg}>
                                <div className={meetingStyles.smallBit}>
                                    Hello world!
                                </div>
                            </div>
                            <p className={meetingStyles.time}>2:58pm</p>
                        </div>
                    </div>
                    <div className={meetingStyles.textInput}>
                        <input type="text" className={meetingStyles.input} placeholder="Send Message" />
                        <button className={meetingStyles.sendButin}><AiOutlineSend style={{ fontSize: "20px" }} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Meeting;