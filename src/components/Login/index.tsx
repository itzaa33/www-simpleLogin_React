import React, { useState } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
    setUser: React.Dispatch<React.SetStateAction<string>>
}

const Comp: React.FC<Props> = (
    {
        setUser
    }
) =>
{
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [errorUsername, setErrorUsername] = useState<boolean>(false)
    const [errorPassword, setErrorPassword] = useState<boolean>(false)

    function CheckError(value: string, type: string)
    {
        if (value.length <= 0)
        {
            return true
        }
       
        if (type === 'password' && value !== 'P@$$W0RD')
        { 
            return true
        }

        return false
    }

    function Onsubmit(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        setErrorUsername(false)
        setErrorPassword(false)

        const checkUsername =  CheckError(username, 'username')
        const checkpassword = CheckError(password, 'password')

        setErrorUsername(checkUsername)
        setErrorPassword(checkpassword)

        console.log(errorUsername, errorPassword)
        if (!checkUsername && !checkpassword)
        {
            setUser(username)
        }
    }

    return (
        <Container style={{ height: '100vh', display:'flex' }}>
            <Form onSubmit={Onsubmit} style={{ margin: 'auto', maxWidth:'600px', width:'100%' }}>
                <h1 style={{textAlign:'center'}}>Login</h1>
                <Form.Group controlId="validationFormikUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">Username</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            isInvalid={errorUsername}
                        />
                        <Form.Control.Feedback type="invalid">
                            {'username is a required field'}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <InputGroup.Text id="inputGroupPrepend">Password</InputGroup.Text>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            aria-describedby="inputGroupPrepend"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={errorPassword}
                        />
                        <Form.Control.Feedback type="invalid">
                            {'password is a required field'}
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Comp;
