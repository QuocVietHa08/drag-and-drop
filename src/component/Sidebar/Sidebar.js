import React, { useState } from 'react'
import styled  from 'styled-components'

const Container = styled.div`
    border:1px solid black;
    margin-left:20px;
    padding: 10px 20px;
    border-radius:10px;
 `

 const Input = styled.div`
    padding:10px;
 `
 const LabelStyle = styled.label`
    width:200px;
    padding-right:10px;
 `




function Sidebar(props) {
    const {state, setState} =props; 
    const [task, setTask] = useState({
        id:"",
        title:"",
        width:null,
        taskIds:[],
    });


    const addTask = () =>{
        if(!task.id || !task.title || !task.width) return;
        let stateClone = {...state};
        let stateCloneColumns = {...stateClone.columns};
        stateCloneColumns[task.id] = task;

        stateClone = {...stateClone,columns:{...stateCloneColumns}, columnOrder:[...stateClone?.columnOrder,task.id]};
        setState(stateClone);
     }

    return (
        <Container>
            <div>
                <Input>
                    <LabelStyle name="title" >Enter the title </LabelStyle>
                    <input onChange={(e)=>setTask({...task,title:e.target.value})} name="title" />
                </Input>
                <Input>
                    <LabelStyle name="id">Enter the id</LabelStyle>
                    <input onChange={(e)=>setTask({...task,id:e.target.value})} name="id" />
                </Input>
                <Input>
                    <LabelStyle name="width">Enter the width (1 is short 2 is log) </LabelStyle>
                    <input type="number" onChange={(e)=>setTask({...task,width:parseInt(e.target.value)})} name="width" />
                </Input>

                <button onClick={addTask}>Submit</button>
            </div>
        </Container>
    )
}

export default Sidebar
