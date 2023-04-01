import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    var[input,setInput] = useState()
    const inputHandler (e)=>{
       const{name,value} =e.target
       setInput({...input,[name]:value})
    }
  return (
    <div>
      <TextField id="filled-basic" label="name" name="name" value={Input.name}variant="filled" onChange={inputHandler}/><p/>
      <Typography>{input.name}</Typography>
      <TextField id="filled-basic" label="brand" name="brand" value={Input.brand}variant="filled" onChange={inputHandler}/><p/>
      <Typography>{input.brand}</Typography>

    </div>
  )
}

export default Add
