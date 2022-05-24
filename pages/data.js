import React from 'react'
import {getData} from '../utils/data'

export async function getStaticProps(){
    const data=getData();
    const serializedData=String(data);
    return {
        props:{
            serializedData
        }
    }
}
  

export default function Data({data}){
    console.log({data})
    return (
        <div>
           hello
        </div>
    )
}
