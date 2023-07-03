
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Img1 from './assests/profile-1.png';
import Img2 from './assests/profile-2.png';
import Img3 from './assests/profile-3.png';
import axios from 'axios';

const Home = () => {



    const [PeopleData, setPeopleData] = useState([]);




    const fetchData = async () => {

        const config = {

            headers: {
                'Content-Type': 'application/json'
            }

        }

        const data = await axios.get('/addUser', config);

        try {

            setPeopleData([...data.data.getUser]);
            // setImage(data?.finaldata?.image)

            console.log(PeopleData, "xyz");
            // console.log(name,image)


        } catch (e) {

        }

    }




    const DeleteHanlder = async (id) => {



        console.log(id, "dddddgdg    ")

        // alert('hellod')

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.delete(`/delete/${id}`, config);

        if (res.data.status === 401 || !res.data) {

            console.log("errror")


        }
        else {

            fetchData();

        }




    }



    useEffect(() => {

        fetchData();


    }, [fetchData])
    console.log(PeopleData, "gg");


    return (<>










        <Container>
            <Row>

                {
                    PeopleData.map((item) => {

                        return (<>
                            <Col>

                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`uploads/${item.imagepath}`} />


                                    {console.log(item.imagepath, "ip")}
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary" type='button' onClick={() => DeleteHanlder(item._id)}>Delete</Button>
                                    </Card.Body>
                                </Card>

                            </Col>

                        </>)

                    })
                }








            </Row>
        </Container>

    </>)



}


export default Home;