import React, { useState } from 'react';
import createStyle from "./create-meeting.module.scss"
import { Form, Button } from "react-bootstrap"

function CreateMeeting() {
    const [create, setCreate] = useState({
        name: "",
        email: "",
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
                }}>Sign up for meeting</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicFullName1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Full Name" onChange={handleSubmit} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleSubmit} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default CreateMeeting;