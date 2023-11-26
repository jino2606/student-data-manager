import React from 'react'

function Groups() {
  return (

<>
  
  
          <div className=' mt-5 mb-5 '>
            <h4 class=' d-flex justify-content-center  ' style={{marginright:'350px'}}>Groups </h4>
        <div className='form-group'>
        <button style={{marginTop:'-100px',fontSize:'15px'}}  class="btn btn-success btn-lg float-right " type="button" >+ Create Groups</button>
          
        </div>
        <table  class='d-flex justify-content-center align-center w-auto'>
        <ul class="list-group w-25 ">
        <li class="list-group-item p-1">Group <button style={{border:"none" , background:"none"}}> <i class="fa-solid fa-caret-down"></i></button></li>
        <li class="list-group-item hstack gap-5">Group-1  <button style={{border:"none" , background:"none" }}><i class="fa-solid fa-trash"></i></button></li>
        <li class="list-group-item hstack gap-5">Group-2  <button style={{border:"none" , background:"none"}}><i class="fa-solid fa-trash "></i></button></li>
        <li class="list-group-item hstack gap-5">Group-3  <button style={{border:"none" , background:"none"}}><i class="fa-solid fa-trash"></i></button></li>
        <li class="list-group-item hstack gap-5">Group-4  <button  style={{border:"none" , background:"none"}}><i class="fa-solid fa-trash"></i></button></li>
        </ul>
        </table>
          </div>
</>
  

  )
}

export default Groups