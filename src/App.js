import React, { useState } from 'react'
// import initialData from './initial-data'
// import Column from './Column'
// import { DragDropContext, Droppable } from 'react-beautiful-dnd'
// import styled from 'styled-components'
// import Sidebar from './component/Sidebar/Sidebar'

import {
  BrowserRouter as Router,
   Route,Link, Switch,
   Routes
} from 'react-router-dom'
import DnDComponent from './DnDComponent'
import GridComponent from './GridComponent'

// const Container = styled.div`
//  display: flex;
//  flex-wrap:wrap;
//  border:1px solid black;
//  width:990px;
//  border-radius:10px;
// `

// const Wrapper = styled.div`
//   display:flex;
// `

function App(){
  // const [state, setState] = useState(initialData);

  // const onDragEnd = (result) => {
  //   document.body.style.color = 'inherit'
  //   document.body.style.backgroundColor = 'inherit'
  //   const { destination, source, draggableId, type } = result

  //   if (!destination) {
  //     return
  //   }
  //   if (
  //     destination.droppableId === source.draggableId &&
  //     destination.index === source.index
  //   ) {
  //     return 
  //   }
  //   //reorderting columns
  //   if(type === 'column'){
  //     const newColumnOrder = Array.from(state.columnOrder);
  //     newColumnOrder.splice(source.index, 1);
  //     newColumnOrder.splice(destination.index, 0, draggableId);

  //     const newState = {
  //       ...state,
  //       columnOrder: newColumnOrder,
  //     };
  //     setState(newState)
  //     // this.setState(newState);
  //     return;
  //   }

  //   //ordering an array
  //   const start = this.state.columns[source.droppableId]
  //   const finish = this.state.columns[destination.droppableId]

  //   if (start == finish) {
  //     const newTaskIds = Array.from(start.taskIds)
  //     newTaskIds.splice(source.index, 1)
  //     newTaskIds.splice(destination.index, 0, draggableId)

  //     const newColumn = {
  //       ...start,
  //       taskIds: newTaskIds,
  //     }

  //     const newState = {
  //       ...state,
  //       columns: {
  //         ...state.columns,
  //         [newColumn.id]: newColumn,
  //       },
  //     }
  //     setState(newState)
  //     // this.setState(newState)
  //     return
  //   }

  //   //moving from one list to another
  //   const startTaskIds = Array.from(start.taskIds)
  //   startTaskIds.splice(source.index, 1)
  //   const newStart = {
  //     ...start,
  //     taskIds: startTaskIds,
  //   }

  //   const finishTaskIds = Array.from(finish.taskIds)
  //   finishTaskIds.splice(destination.index, 0, draggableId)
  //   const newFinish = {
  //     ...finish,
  //     taskIds: finishTaskIds,
  //   }

  //   const newState = {
  //     ...this.state,
  //     columns: {
  //       ...this.state.columns,
  //       [newStart.id]: newStart,
  //       [newFinish.id]: newFinish,
  //     },
  //   }
  //   this.setState(newState)
  // }

  // const onDragStart = () => {
  //   document.body.style.color = 'gray'
  //   // document.body.style.backgroundColor = 'lightblue';
  //   document.body.style.transition = 'background-color 0.2s ease'
  // }
  // const onDragUpdate = (update) => {
  //   const { destination } = update
  //   const opacity = destination
  //     ? destination.index / Object.keys(state.tasks).length
  //     : 0
  //   // document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`;
  // }
  // console.log(state.columns['column-7'],"11");
    return (
      // <Wrapper>
      // <DragDropContext
      //   onDragStart={onDragStart}
      //   onDragUpdate={onDragUpdate}
      //   onDragEnd={onDragEnd}>
      //   <Droppable
      //     droppableId="all-columns"
      //     // direction="horizontal"
      //     type="column">
      //     {(provided) => (
      //       <Container {...provided.droppableProps} ref={provided.innerRef}>
      //         {state?.columnOrder.map((columnId,index) => {
      //           const column = state.columns[columnId]
      //           // if(!column.taskIds){
      //           //   return; 
      //           // }
      //           // const tasks = column?.taskIds?.map(
      //           //   (taskId) => state?.tasks[taskId]
      //           // )

      //           return <Column index={index} state={state} setState={setState} key={column.id} column={column}  />
      //         })}
      //         {provided.placeholder}
      //       </Container>
      //     )}
      //   </Droppable>
      //   </DragDropContext>
      //       <Sidebar state={state} setState={setState} />
      //   </Wrapper>
      <Router>
            <Routes>
              <Route path="/dnd" element={<DnDComponent />}/>
              <Route path="/grid" element={<GridComponent />} />
            </Routes>
      </Router>
    )
}
export default App
