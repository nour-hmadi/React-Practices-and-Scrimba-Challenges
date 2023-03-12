import React from "react"
import Navbar from "./Components/Navbar"
// import Hero from "./components/Hero"
import Card from "./Components/Card"
import data from "./data"
import './styles.css'

export default function AirbnbApp() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card  
                key={item.id}
                item={item} />
              
        )
    })        
    
    return (
        <div>
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}