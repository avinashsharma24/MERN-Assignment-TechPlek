import React, { useEffect, useState } from 'react'
import {Link } from 'react-router-dom';

const ClientsPanel = () => {

     const[name , setName] = useState("");

     const [lastName , setLastName ] = useState("")

     const [email , setEmail ] = useState("")

     const [mobile , setMobile ] = useState()

     const [project , setProject ] = useState("")

    //  const[data , setData] = useState([]);
    const [data , setData]  = useState([]);

  // Post api for saving the data in the databse
     const collectData = async ()=>{
        console.log(name,lastName,email,mobile,project);
     
         let result = await fetch('http://localhost:5002/register' , {
            method : 'post',
            body : JSON.stringify({name,lastName,email,mobile,project}),
            headers :{
                'Content-Type' : 'application/json'
            },
         })

         result = await result.json();         

         console.log(result);

         localStorage.setItem("client", JSON.stringify({result}))
         
     }


     useEffect((data)=>{
        inpChange();

        },[data])

        // get api for getting the data from the api
     const inpChange = async ()=>{
    
           let result = await fetch('http://localhost:5002/getdata');

           result = await result.json();
           setData(result);
    }
      console.log(data);


  //  const deleteClient = async(id)=>{
  //     console.log(id);

  //     let result = await fetch(`http://localhost:5002/deleteClient/${id}`,{
  //       method: "Delete"
  //     });
  //     result = await result.json();
  //     console.log(result);
  //     if(result)
  //     {
  //       inpChange();
  //       alert("record is deleted");
  //     }
  //  }


  return (
    <>
     
     <h1 className='h'>Clients</h1>
    <section className='boxes'>
    
      <div className='box-1'>
        <div className='client-list'>
        <ul>
          <li>name</li>
          <li>lastName</li>
          <li>email</li>
          <li>mobileNo</li>
          <li>project</li>
          <li>||||</li>
        </ul>
        </div>

   {/* here we are mapping the data what we are getting from the api */}
        <div className='ul-client'>
      {
        Array.isArray(data)?
         data.map((item)=>

          <ul key={item._id}>
          <li>{item.name}</li> 
          <li>{item.lastName}</li>
          <li> {item.email}</li>
          <li>{item.mobile}</li>
          <li>{item.project}</li>
          {/* <li><Link onClick={deleteClient(item._id)}>delete</Link></li> */}
          <li className='link' ><Link to ={'/client/'+item._id } >update</Link></li>
          <li   className='link'><Link to ='/' >delete</Link></li>

        </ul> )  : " "}
   
        <ul>
      
        </ul>
       </div>
    </div>
     


<div className='box-2'>
  <h1>Create Client</h1>

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
 
    <button className='btn' onClick= {collectData}> Create Client </button>


</div> 
    </section>
   

    </>
  )
}

export default ClientsPanel
