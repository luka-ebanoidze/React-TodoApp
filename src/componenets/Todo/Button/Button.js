import './Button.css'

import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'

export function Button ({type, remove, edit, id, setEdit}) {
    return (
        <div>
            {type === 'remove' && <button className='remove-btn' onClick={()=>{remove(id)}}><AiFillDelete /></button> ||
             type === 'edit' && <button className='edit-btn' onClick={()=>{setEdit(true)}}><AiFillEdit /></button> ||
             type === 'save' && <button className='save-btn' onClick={()=>{edit(id); setEdit(false) }}><TiTick /></button>}
        </div>
    )
}

