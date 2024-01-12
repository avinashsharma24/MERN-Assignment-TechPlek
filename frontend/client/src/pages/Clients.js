import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

const Clients = () => {

  const[name , setName] = useState("");

  const [lastName , setLastName ] = useState("")

  const [email , setEmail ] = useState("")

  const [mobile , setMobile ] = useState()
 
   const [project ,setProject] = useState("");

   const params = useParams();

   useEffect(()=>{

     getClientsDetails();

   },[])

   const getClientsDetails = async ()=>{
     console.log(params);

      let result = await fetch(`http:/localhost:5002/Client/${params._id}`);
      
      result = await result.json();

       console.log(result);

      //  setName(result.name);
      //  setLastName(result.lastName);
      //  setEmail(result.email);
      //  setMobile(result.mobile);
      //  setProject(result.project);

    }

    // over here we import the api to update the values.
   const updateData = ()=>{

    console.log(name,lastName,email,mobile,project);
   }

  return (
    <>
      <div className='c-section'>
<div className='box-2'>

  <h1>Update Clients Details</h1>

  <label>Name</label> <br/>
   <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input> <br/>
   <br/>

   <label>LastName</label> <br/>
   <input type='text'  value={lastName} onChange={(e)=>{setLastName(e.target.value)}}></input>  <br/>
   <br/>

   
   <label>Email</label> <br/>
   <input type='mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>  <br/>
   <br/>


   
   <label>Mobile No.</label> <br/>
   <input type='number' value={mobile} onChange={(e)=>{setMobile(e.target.value)}}></input>  <br/>
  <br/>
  
   

   <label>Project</label> <br></br>
   <input type='text' value={project} onChange={(e)=>{setProject(e.target.value)}}></input>  <br/>
  <br/>
 
    <button className='btn' onClick= {updateData}> Update Client </button>


</div> 
 
 </div>

    </>
  )
}

export default Clients
