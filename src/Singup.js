import axios from 'axios';
import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";


const Singup = () => {



    const [objdata, setObj] = useState({ name: '', email: '', password: '', cpassword: '' });



    const Formchnage = (e) => {
        e.preventDefault();

        // console.log(e.target.value, e.target.name)


        const { name, value } = e.target;


        // setObj(()=>{{ ...objdata, [e.target.name]: e.target.value }});

        console.log(name, value, "name and value")

        // setObj(() => {
        //     return {
        //         ...objdata,
        //         [name]: value
        //     }
        // })


        setObj({
            ...objdata,
            [name]: value
        })


    }




    const SubmitHandler = async (e) => {

        e.preventDefault();




        console.log(objdata, "od")




        try {

            const config = {
                headers: 'application/json'
            }

            const res = await axios.post('/singup', objdata, config)
            console.log("res", res.status)

            if (res.status === 200 || res.status === 201) {




                setObj({ name: '', email: '', password: '', cpassword: '' });
                console.log("ac")

                console.log(objdata, "obja")

            }

            // console.log(res);

        } catch (e) {


            console.log(e, "error occrued")
        }



    }











    // console.log(obj,"obj")


    return (<>


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
                                            <Form.Group className="mb-3" controlId="Name">
                                                <Form.Label className="text-center" >
                                                    Name
                                                </Form.Label>
                                                <Form.Control type="text" name='name' value={objdata.name} onChange={Formchnage} placeholder="Enter Name" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center" >
                                                    Email address
                                                </Form.Label>
                                                <Form.Control type="email" name='email' value={objdata.email} onChange={Formchnage} placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control name='password' onChange={Formchnage} value={objdata.password} type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control name='cpassword' onChange={Formchnage} value={objdata.cpassword} type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            >
                                            </Form.Group>
                                            <div className="d-grid">
                                                <Button variant="primary" onClick={SubmitHandler}>
                                                    Create Account
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Already have an account??
                                                <a href="/login" className="text-primary fw-bold">
                                                    Sign In
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    </>)
}

export default Singup;

