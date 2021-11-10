import React from 'react'
import styles from './column.module.css'
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'

function Task(props) {
    const taskStyle = {
        backgroundColor: `${props => props.isDragging ? 'lightgreen' : 'red' }`
    }
    const Container = styled.div`
        border:1px solid lightgrey;
        border-radius:2px;
        padding:8px;
        margin-bottom:8px;
        background-color:${props => (props.isDragging ? 'lightgreen' : 'inherit')};

        display:flex;
    `;
    
    const Handle = styled.div`
        width:20px;
        height:20px;
        background-color:orange;
        border-radius: 4px;
        margin-right: 8px; 
    `
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot)=>(
                <Container
                {...provided.draggableProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                className={styles.task_container}>
                <Handle {...provided.dragHandleProps} />
                {props.task?.content} 
                </Container>
            )}
         </Draggable>
    )
}

export default Task
