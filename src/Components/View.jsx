import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const View = () => {
    var[product,setProduct] = useState([])
    useEffect(()=>{
    axios.get("http://localhost:3008/student")
    .then(response=>{
        setProduct(product=response.data)
        console.log(product)
    })
    .catch(error=>console.log(error))
},[])
  return (
   <TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>brand</TableCell>
                <TableCell>quantity</TableCell>
                <TableCell>price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {product.map((value,index)=>{
                return<TableRow>
                <TableCell>{value.id}</TableCell>
                <TableCell>{value.name}</TableCell>
                <TableCell>{value.grade}</TableCell>
                <TableCell>
                    <Button onClick={()=>deleteValue(value.id)}>delete</Button>
                </TableCell>
                <TableCell><Button color='success' onClick={()=>updateValue(value)}>update</Button></TableCell>
                </TableRow>})}
                 </TableBody>
    </Table>
   </TableContainer>
      
   
  )
}

export default View
