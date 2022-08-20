
import React from "react";
import { useEffect, useState } from "react";



export function ApiDemo()
{
    const [mars ,setMars]= useState([])
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            setMars(data.photos);
        })
    },[])

    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th>Camera</th>
                        <th>Rover</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.map(item=>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><img src={item.img_src} width="100" height="100" /></td>
                                <td>{item.camera.full_name}</td>
                                <td>{item.rover.name}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
   
}
