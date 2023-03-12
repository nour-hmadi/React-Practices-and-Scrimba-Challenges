import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`./Images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="../Images/star.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}

// NOTE++++ 
// what makes our two codes here different is something we want to recieve in the AirbnbApp.js
//in the above code we're expecting to recieve an item and each item has some properties we want them to pass to specific place
//whereas in the below code we were expecting our cards to recieve props and these props are recieving from each item a property 
//so to make everything clear 
//when we want to write down the below code we have to fix our props in the AirbnbApp.js to   
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
            
// // // BUTTTT we had good news for you if you want to just stick with the below code and also keep our AirbnbApp.js just clean the way it is with the above code
// so the third way of sending the props to the Card here is to go to the AirbnbApp.js and instead of writing item={item}, just add couple of dots and delete the prop item
// to illustrate The AirbnbApp.js would look something like that 

                //  <Card  
                //  key={item.id}
                //  {...item} /> 
            // we're not gonna use this way of sending props !!!



// import React from "react"

// export default function Card(props) {
//     let badgeText
//     if (props.location !== "Online"){
//         if  (!props.openSpots){
//             badgeText = "Available On Site"
//         } else {
//             badgeText= "SOLDOUT"
//         }}
//     else {
//         badgeText="ONLINE"
//     }
// // I am getting an error with soldout it is taking all the values to be different from zero!!!!!
    
//     return (
//         <div className="card">
//      {badgeText && <div className="card--badge">{badgeText}</div>}            <img src={`./Images/${props.img}`} className="card--image" />
//             <div className="card--stats">
//                 <img src="../images/star.png" className="card--star" />
//                 <span>{props.rating}</span>
//                 <span className="gray">({props.reviewCount}) • </span>
//                 <span className="gray">{props.location}</span>
//             </div>
//             <p className="card--title">{props.title}</p>
//             <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
//         </div>
//     )
// }