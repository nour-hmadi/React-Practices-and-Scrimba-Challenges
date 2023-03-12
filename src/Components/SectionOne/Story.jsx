import React from "react";
export default function Story(props){
return(
    <> 
        <div className="title">
        <h2>{props.title}</h2>
        </div>
          <div className="text">
            <h1>{props.text}</h1>
          </div>
    </>

)
}