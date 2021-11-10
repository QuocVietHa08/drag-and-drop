import React from 'react'
import styles from './column.module.css'
import styled from 'styled-components'
import Task from './Task'
import { Droppable, Draggable } from 'react-beautiful-dnd'
function Column(props) {
  const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${(props) =>
      props.isDraggingOver ? 'skyblue' : 'white'};

    flex-grow: 1;
    min-height: 100px;
  `
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div {...provided.draggableProps} ref={provided.innerRef} className={styles.container}>
          <h3 {...provided.dragHandleProps} className={styles.title}>{props.column.title}</h3>
          <Droppable droppableId={props.column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}
                {...provided.droppableProps}
                className={styles.task_container}>
                {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default Column
