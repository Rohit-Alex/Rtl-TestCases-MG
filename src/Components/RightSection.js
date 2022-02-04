import { Button, TextField } from '@mui/material';
import React from 'react'
import { useState } from 'react';

function RightSection() {
    const [customBoardName, setCustomBoardName] = useState('')
    const [boardName, setBoardName] = useState('')
    function drop(e) {
        e.preventDefault();
        let draggableID = e.dataTransfer.getData("text");
        let draggable = document.getElementById(draggableID);
        // draggable.draggable = true
        // draggable.addEventListener('')
        // let clonedNode = draggable.cloneNode(true);
        console.log(draggable, 'draggle')
        // draggable.setAttribute("draggable", "false");
        let container = document.getElementsByClassName("progress-list")[0];
        // clonedNode.addEventListener('click', toggleArrow)
        container.appendChild(draggable);
    }

    function allowDrop(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy"
    }
    return (

        <div div className="progress" onDrop={drop} onDragOver={allowDrop} >
            <h3 className="progress-heading">Progress</h3>
            <div className='flex mt-4 justify-around items-center' >
            <TextField variant="standard" value={customBoardName} onChange={(e) => setCustomBoardName(e.target.value)} />
            <Button variant="text" onClick={() => {
                setBoardName(customBoardName);
                setCustomBoardName('');
            }} >Add</Button>
            </div>
            <div className='mt-2'>

                {boardName}
                </div>
            <div className="progress-list">

            </div>
        </div>
    )
}

export default RightSection
