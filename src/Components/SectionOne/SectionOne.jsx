import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Story from './Story';

const url = "http://localhost:5000/api/story/";

function SectionOne(){
     // get data from API
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getAllInfo();
  }, []);

  const getAllInfo = () =>
    axios.get(`${url}`)
      .then((response) => {
        //add our data to state
        setInfo(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));

  const story = info.map((object) => {
       return <Story title={object.title} text={object.text} />;
    });

    return (
      <div>
       {story}
      </div>
    )
  }
  export default SectionOne;
 
