import React, { useState } from 'react';
import createStyle from "./join-meeting.module.scss"
import { Form, Button } from "react-bootstrap"

function JoinMeeting() {
    const [create, setCreate] = useState({
        name: "",
        email: "",
        meetingId: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setCreate((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <div className={createStyle.holdAll}>
            <div className={createStyle.holdAll2}>
                <h3 style={{
                    textAlign: "center",
                }}>Join meeting</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicFullName1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Full Name" onChange={handleSubmit} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFullName1">
                        <Form.Label>Meeting ID</Form.Label>
                        <Form.Control type="text" name="meetingId" placeholder="Meeting ID" onChange={handleSubmit} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleSubmit} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Join Meeting
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default JoinMeeting;