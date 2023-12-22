import React from 'react'
import Card from 'react-bootstrap/Card';


function UserList({user}) {
  return (
    <div>

    <Card className='card' style={{backgroundColor:"rgba(192,112,38,0.507)", alignContent:"left",width: '16rem', margin:"48px", borderRadius: "15px" , marginLeft:"-10px",     alignItems: "center",
}}>
      <Card.Body >
        <Card.Title>       <p> {user.name}</p>
 </Card.Title>
        <Card.Text>
        <p> {user.username}</p>
      <p> {user.email}</p> 
<p>{user.address.street}</p> 
<p>{user.address.suite}</p>
<p>{user.address.city}</p>
<p>{user.address.zipcode}</p>
<p>{user.address.geo.lat}</p>
<p>{user.address.geo.lng}</p>

        </Card.Text>
       
      </Card.Body>
    </Card>
 


    </div>
  )
}

export default UserList
