import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { useContext } from 'react';
import axios from 'axios';


import { Usercontext } from './components/context-provider';
const Dashborad = () => {

    const navigate = useNavigate();

    const { UserData, SetUserdata } = useContext(Usercontext);




    const getAuth = async () => {


        const token = localStorage.getItem('usersdatatoken');

        try {

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': token
            }

            const result = await axios.get('/validUser', {
                headers: headers
            });

            // console.log(result.data.validUserOne.email, "rssss");

            if (result.status === 201) {
                navigate("/dashboard");

                SetUserdata(result.data.validUserOne);

            } else {
                navigate("*");


            }



        } catch (e) {

            console.log(e, "error occured!!")



        }




    }



    useEffect(() => {

        getAuth();

        console.log('useEffect called!')

    }, [])


    return (

        <>
            <div>dashborad</div>

            {
                UserData ? <p>email:{UserData.email}</p> : null

            }










            <div>


            </div>
        </>

    )
}

export default Dashborad;