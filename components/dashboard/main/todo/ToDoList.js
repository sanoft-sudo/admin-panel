import React from 'react';
import styled from 'styled-components';
import ToDo from './ToDo';


const DIV = styled.div`
display: flex;
flex-direction: column;
`;

const ToDoList = ({items, deleteItem, markItemComplete}) => {
    console.log("items",items)
    return (
        <DIV>
            {
            items?.map( item => (
                <ToDo id={item.id} status={item.status} task={item.task} deleteItem={deleteItem} markItemComplete={markItemComplete} />
            ))
            }
            
        </DIV>
    )
}

export default ToDoList
