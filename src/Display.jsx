import React from 'react'

export default function Display({data}) 

{
    let {population,name,capital,region}=data
    return ( <tr style={{"color":"blue","padding":"2px","border":"5px solid #000"}}>
        <td>{name}</td>
        <td>{population}</td>
        <td>{capital}</td>
        <td>{region}</td>
        </tr>)
}
