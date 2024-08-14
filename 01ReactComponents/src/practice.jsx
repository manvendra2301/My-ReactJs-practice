import { useState } from "react";

const user = {
  name: "Manvendra",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize:90,
};


function Practice(){
return(
  <>
  <h1>{user.name}</h1>
  <img
  className="avatar"
  src={user.imageUrl}
  alt={'photo of' +user.name}
  style={{
    width: user.imageSize,
    height: user.imageSize,
    borderRadius:45
    
  }}
  />
  </>
) 
}
export default Practice;