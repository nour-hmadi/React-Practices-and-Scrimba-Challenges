import React from "react";
import Hello from "./Components/Hello/Hello";
import "./App.css";
import ContactTwo from "./Components/Contact/ContactTwo";
import Cat from "./Components/Contact/Cat.png";
import Joke from "./Components/Joke/Joke";
import SliderMui from "./Components/slidererr";

import JokesData from "./Components/Joke/JokesData.js";
import AirbnbApp from "./Components/Airbnb/AirbnbApp";




function App() {
  return (
    <div>
      <AirbnbApp />
    </div>
  )
}

export default App





// export default function App() {
//   console.log(JokesData)
//     const jokeElements = JokesData.map(joke => {
//         return <Joke setup={joke.setup} punchline={joke.punchline} />
//     })
//     return (
//         <div>
//             {jokeElements}
//         </div>
//     )
// }




//here we were rendering the jokes individually, but then we render them using .map which's quite easier :p


// function App() {
//   const date = new Date();
//   return (
//     <div>
//       <div>
//         <h1>It is currently about {date.getHours() % 24} o'!</h1>
//         <Hello />
//         <ContactTwo source={Cat} name="hey" number="12345" email="@@@@@@@@@@" />
//         <ContactTwo name="hi" number="56789" email="ghFT@ESSET" />
//         <ContactTwo name="hello" number="0000" email="@A@A" />
//         <ContactTwo name="batti5a" number="44444" email="sdfgh@@@" />
//       </div>
//       <SliderMui />

//       <div>
//         <Joke
//           punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
//           setdown="awsdfghjkl"
//         />
//         <Joke />
//         <Joke
//           setup="How did the hacker escape the police?"
//           punchline="He just ransomware!"
//         />
//         <Joke
//           setup="Why don't pirates travel on mountain roads?"
//           punchline="Scurvy."
//         />
//         <Joke
//           setup="Why do bees stay in the hive in the winter?"
//           punchline="Swarm."
//         />
//         <Joke
//           setup="What's the best thing about Switzerland?"
//           punchline="I don't know, but the flag is a big plus!"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
