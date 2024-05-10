import React from 'react'
import { useState } from 'react'
import {FaTrashAlt} from 'react-icons/fa'
function Content() {
    const [items,setItems]=useState([
{
    id:1,
    checked:false,
    item:"kandhi pappu"
},
{
    id:2,
    checked:false,
    item:"moodha pappu"
}
,
{
    id:3,
    checked:false,
    item:"massor pappu"
}
    ])
    const handleClick= (id)=>{
        console.log(`key ${id}`)
        const listItems=items.map((i)=>i.id=== id?{...i,checked:!i.checked} :i)
        setItems(listItems)
    }
    
    const handleCheck= (id)=>{
        // console.log(`key ${id}`)
        
        const listItems=items.map((i)=>i.id=== id?{...i,checked:!i.checked}
         :i)
        //  console.log(JSON.stringify(listItems))
        setItems(listItems)
        localStorage.setItem('shopping',JSON.stringify(listItems))
        
    }
         const handleDelete=(id)=>{
                const listItems=items.filter((i)=> i.id!==id);
                setItems(listItems)
        localStorage.setItem('shopping',JSON.stringify(listItems))
         }
     return (
    <main>
        {items.length?
        
        (<ul type='none'>
            {items.map((i)=>(
                
                <li className="item" key={i.id}>
                    <input type="checkbox" onChange={()=>{handleCheck(i.id)}} checked={i.checked}/>
                <label
                style={(i.checked)?{textDecoration:'line-through'}:null}
                onDoubleClick={()=>handleCheck(i.id)}
                >{i.item}</label>
                <FaTrashAlt role='button' 
                tabindex='0' onClick={()=>{handleDelete(i.id)}}/>
                </li>

            ))}
        </ul>):(<p style={{margintop:'2rem'}}>empty</p>)}
    </main>
  )
}

export default Content
