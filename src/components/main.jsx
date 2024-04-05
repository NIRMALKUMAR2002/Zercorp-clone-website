import React, { useEffect, useState } from 'react'
import privateAPI from '../api/privateAPI'

export default function NewMain() {

    const [appData,setAppData] = useState([


{
    name:"ram",
    age:"12"
},
{
    name:"nirmal",
    age:"12"
},
{
    name:"nanda",
    age:"12"
},
{
    name:"gopi",
    age:"12"
},
{
    name:"thiru",
    age:"12"
}
])
  
console.log(appData)


  return (
    <div>
     
     {appData?.map((item,i)=>(
     <h1  key={i} >Welcome {item?.name} your age is {item?.age}</h1>
     ))
     }
    </div>
  )
}


