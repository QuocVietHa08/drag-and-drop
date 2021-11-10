import React from 'react'
import initialData from './initial-data'
import Column from './Column'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

class App extends React.Component {
  state = initialData

  onDragEnd = (result) => {
    document.body.style.color = 'inherit'
    document.body.style.backgroundColor = 'inherit'
    const { destination, source, draggableId, type } = result
    console.log(result, '3')

    if (!destination) {
      return
    }
    if (
      destination.droppableId === source.draggableId &&
      destination.index === source.index
    ) {
      return
    }
    //reorderting columns
    if(type === 'column'){
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    //ordering an array
    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start == finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      }

      this.setState(newState)
      return
    }

    //moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    console.log('1', startTaskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds)
    console.log('2', finishTaskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    this.setState(newState)
  }

  onDragStart = () => {
    document.body.style.color = 'gray'
    // document.body.style.backgroundColor = 'lightblue';
    document.body.style.transition = 'background-color 0.2s ease'
  }
  onDragUpdate = (update) => {
    const { destination } = update
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0
    // document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`;
  }
  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column">
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {this.state.columnOrder.map((columnId,index) => {
                const column = this.state.columns[columnId]
                const tasks = column.taskIds.map(
                  (taskId) => this.state.tasks[taskId]
                )

                return <Column index={index} key={column.id} column={column} tasks={tasks} />
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}
export default App
