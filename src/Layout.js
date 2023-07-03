import React, { useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";

import { Usercontext } from "./components/context-provider";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Layout = () => {


    const { UserData } = useContext(Usercontext);

    const navigate = useNavigate();


    const LogoutHandler = async (e) => {

        e.preventDefault();




        const token = localStorage.getItem('usersdatatoken');

        // console.log(token, "token")


        // alert('hello');

        const headers = {

            // "Content-Type": "application/json",
            'Authorization': token,
            // Accept: 'application/json'
        }

        const result = await axios.get('/logout', { headers });




        try {

            if (result.status === 201) {

                localStorage.removeItem("usersdatatoken");

                alert('User has been deleted successfully!!');
                navigate("/login");

            } else {
                alert('error occoured!!');

            }


        } catch (e) {
            console.log(e, "erro")
        }





    }



    const LogoutHandlertoken = () => {
        localStorage.removeItem('usersdatatoken');

        console.log('userlogout Successfull');

    }



    return (<>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Link to="/">Home</Link>
                        <Link to="/register">Register</Link>


                    </Nav>


                </Navbar.Collapse>
                {
                    UserData ? <div style={{ background: 'red', height: '50px', width: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#fff' }}>{UserData?.email[0]}</div> : null

                }
                <button onClick={LogoutHandler}>Logout</button>

            </Container>
        </Navbar>
        <Outlet />

    </>)


}

export default Layout;