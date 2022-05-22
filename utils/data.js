import React from 'react'
const axios=require('axios').default;


export default function getData(){
    axios.get('api.esummit.in/events/all')
    .then (response=>{
        return response;
    })
    .catch(err =>console.log(err));
    // return responseBody;
}