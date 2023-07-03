import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { Container } from "react-bootstrap";
import { useState } from "react";   

import axios from 'axios'

const Register = () => {



    const [name, setName] = useState('');
    const [file, setFile] = useState('');



    const clickHandler = async (e) => {
        e.preventDefault();




        var formData = new FormData();
        formData.append("name", name);
        formData.append("photo", file);




        console.log(name, "and", file)
        setName('');
        setFile('');

        const data = { name: name, file: file }

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }


        try {

            console.log("enter")

            const res = await axios.post('/register', data, config);

            console.log(res.data, "reg-data")

        } catch (error) {
            console.log("errrrr")

            console.error(error);

        }


    }





    return (<>

        <Form  >
            <Container>
                <Row>
                    <Col md={6}>
                        <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Col>
                    <Col md={6}>
                        <Form.Control type='file' name='file' value={''} onChange={(e) => setFile(e.target.files[0])} />
                    </Col>

                    <button style={{ marginTop: '40px' }} type="submit" onClick={clickHandler}>submit</button>
                </Row>
            </Container>
        </Form>
    </>)

}

export default Register;