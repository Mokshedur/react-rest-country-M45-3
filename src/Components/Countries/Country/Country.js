import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;
    console.log(props.country);
    return ( <
        div className = 'country' >

        <
        h4 > The country name is: { name } < /h4> <
        img src = { flag }
        alt = "" / >
        <
        h4 > The country capital is: { capital } < /h4> <
        p >
        <
        small > Region: { region } < /small> <
        /p> <
        h4 > The country capital is: { population } < /h4>





        <
        /div>
    );
};

export default Country;