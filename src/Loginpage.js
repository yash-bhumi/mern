
import axios from "axios";
import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Login = () => {

    const navigate = useNavigate();


    const [objdata, setObj] = useState({ email: '', password: '' });


    const onChangeFun = (e) => {

        const { name, value } = e.target;

        setObj({ ...objdata, [name]: value })


        console.log(name, value, "hello")


    }



    const submitHandler = async (e) => {

        e.preventDefault();



        try {


            const res = await axios.post('/login', objdata);

            if (res.status === 200 || res.status === 201) {

                setObj({ email: '', password: '' });

                // console.log(res.data.result.token, "res")
                localStorage.setItem("usersdatatoken", res.data.result.token)


                alert('data facted successfully !!')


                navigate('/dashboard')
            }



        } catch (e) {
            console.log(e, "error")

        }









    }









    return <>


        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <div className="border border-2 border-primary"></div>
                        <Card className="shadow px-4">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-center text-uppercase ">Logo</h2>
                                    <div className="mb-3">
                                        <Form>


                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center" >
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email" name='email' value={objdata.email} onChange={onChangeFun} placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control name='password' type="password" value={objdata.password} onChange={onChangeFun} placeholder="Password" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" onClick={submitHandler}>
                                                    Login
                                                </Button>
                                            </div>
                                        </Form>

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    </>

}

export default Login;




