import React, { useEffect, useState } from 'react'
import { getUsersApi } from '../server/allApi'

function Users() {

    const [ users , setUsers] = useState([])

    const getUsers = async()=>{
       const result =  await getUsersApi()

       setUsers(result.data)
       console.log(result.data);
    }

    useEffect(()=>{
        getUsers()
    },[])
  return (
  <>
        <div>Users</div>
        {users?.length>0 ? users.map((item)=>(
           <>
                <h4>{item.username} </h4> 
                 <h5>hii</h5>
           </>
            
        )) : null}
  </>
      )
}

export default Users