import React from 'react'

function ContactTwo(props) {
  return (
    <div>
        <div className="contact-card">
      {props.source && <img src={`${props.source}`} />}
      <h3>{props.name}</h3>
      <div className="info-group">
        <p>{props.number}</p>
      </div>
      <div className="info-group">
        <p>{props.email}</p>
      </div>
    </div>
    </div>
  )
}

export default ContactTwo
