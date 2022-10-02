import React from 'react'

function Saveresponses() {
    const[email,setEmail]= React.useState('');
    const handleemail = (event)=>{
          setEmail(event.target.value);
    }
    const handlesubmit = (event)=>{
        event.preventDefault();
        fetch('https://bharat-at-acciojob-default-rtdb.asia-southeast1.firebasedatabase.app/message.json', { 

        method: 'POST', 
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({
            email : email
        }) // body data type must match "Content-Type" header
  
      })
      document.getElementById('inputId').value='';
  }
  return (
    <form onSubmit={handlesubmit}>
                      <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleemail} id="inputId"/>
                        <button className="btn btn-primary" type="submit" id="button-addon2">Subscribe</button>
                       </div>
                       <p>Lorem impsum dolor amit</p>
     </form>
  )
}

export default Saveresponses