import React from 'react'
import styles from './column.module.css'
import styled from 'styled-components'
import Task from './Task'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import initialData from './initial-data'
function Column(props) {
  const {state, setState, column, index} = props;

  const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${(props) =>
      props.isDraggingOver ? 'skyblue' : 'white'};

    flex-grow: 1;
    min-height: 20px;
  `
  const Container = styled.div`
     margin:8px;
    border:1px solid lightgray;
    border-radius: 2px;
    width: ${props.column.width == 1 ? '220px' : '460px'};
    background-color: lightblue;
    display: flex;
    flex-direction: column;
  `
  // console.log("2", props);
  const Input = styled.input`
    border:1px solid black;
    background-color:white;
    margin:0 auto;
    margin-top:10px;
    margin-bottom:10px;
    height:25px;
    width:90%;
    cursor:text;


  `
  const deleteColumn = () => {
    Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );


    // console.log("hello");
    // console.log(props);
    console.log(column.id);
    let stateClone = {...state};
    console.log("h2",stateClone);
    stateClone = {...stateClone,"columns":Object.filter(stateClone.columns, col => col.id !== column.id) ,"columnOrder": stateClone.columnOrder.filter(col => col !== column.id)}
    // stateClone = Object.filter(stateClone.columns,col => col.id !== column.id)
    // console.log("h1",stateClone);
    // stateClone = stateClone.columnOrder.filter(col => col.id !== column.id)
    // setState(stateClone)
    // console.log("hello",stateClone);
    setState(stateClone);

  }

  return (
      <Draggable draggableId={props.column.id} index={props.index}>
        {(provided) => (
          <div>
            <Container {...provided.draggableProps}  {...provided.dragHandleProps} ref={provided.innerRef} className={styles.container}>
              <div className={styles.flex}>
                <div className={styles.title}>{props.column.id}</div>
                <div className={styles.deteleBtn} onClick={deleteColumn}>delete</div>
              </div>
              {/* <Droppable droppableId={props.column.id} type="task">
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
              </Droppable> */}
              {/* <Input>
                <input type="text" className={styles.input}  />
              </Input> */}
            </Container>
          </div>
        )}
      </Draggable>
     
  )
}

export default Column
