import React, {useState} from 'react';
import styled from 'styled-components';
import ToDoList from './ToDoList';
import { AddCircle } from "@styled-icons/ionicons-outline";
import nextId  from "react-id-generator";
import { setPrefix } from "react-id-generator";
import moment from 'moment';

const StyledAdd = styled(AddCircle)`

color: #fff;

`;

const StyledDiv = styled.div`
width:100%;

.input-effect{
    width:80%;
    position: relative;
}
 .input-effect input[type="text"] {
    font: 15px/24px "Lato", Arial, sans-serif;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    background: transparent;
  }

  .input-effect  input[type="text"]:focus {
    outline: none;
  }
 
  .input-effect .effect-2 {
    border: 0;
    padding: 7px 0;
    border-bottom: 1px solid rgba(0,0,0,0.12);
    background: transparent;
  }

 .input-effect .effect-2 ~ .focus-border {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: rgba( 0, 0, 0, 0.35 );
    transition: 0.4s;
  }
 .input-effect .effect-2:focus ~ .focus-border {
    width: 100%;
    transition: 0.4s;
    left: 0;
  }


.todo-form{
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom:20px;

}
.input-effect input ::-webkit-input-placeholder { 
  color: rgba( 255, 255, 255, 0.25 )
}

.input-effect input:-ms-input-placeholder {
  color: rgba( 255, 255, 255, 0.25 );
}

.input-effect input::placeholder {
  color: rgba( 255, 255, 255, 0.25 );
}
 .svg-style svg {
    margin: 0 auto;
  }

  .svg-style .tick {
    stroke-dasharray: 100;
    opacity: 0;
    stroke-dashoffset: 100;
    transition: all linear 0.5s;
    transition-delay: 0.5s;
  }

  .svg-style path {
    stroke-width: 1;
    fill: transparent;
    stroke: ${({ loaded }) => (loaded ? "green" : "white")};
  }

  .svg-style circle {
    stroke-width: 1;
    fill: transparent;
    stroke-width: 2;
    stroke: ${({ loaded }) => (loaded ? "green" : "white")};
  }

  .svg-style .tick-outline {
    stroke-dasharray: 100 26;
    stroke-dashoffset: -20;
    animation: dash 0.5s infinite linear;
    transform-origin: 50% 50%;
    transition: all linear 0.5s;
  }

  .svg-style .loaded .tick-outline {
    stroke-dashoffset: 0;
    -animation: none;
  }

  .svg-style .loaded .tick {
    stroke-dashoffset: 0;
    background-color: green;
    opacity: 1;
  }

  @keyframes dash {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ToDoApp = () => {
  setPrefix("todo-");
      const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
    const [value, setValue] = useState("");
    const initialItem = {
         task: '',
            id: '',
            status: false
    }
    const [newItem, setNewItem] = useState(initialItem)
    const initialState = [
        {task: "Wake up", id: "1625818949879", status:false}
    ]
    const [items, setItems] = useState(initialState);

    const handleInput =(e)=>{
        let val = e.target.value
        setNewItem(prev =>({
            ...prev,
            task: val,
            id: moment().valueOf()
        }))
        setValue(val)
    }
   

    const handleAddItem = (e) =>{
        e.preventDefault();
        if(value==="")
        return;

        setItems(prevState => [...prevState, newItem] );
        // setItems([].concat(newItem))
        setValue("")
    }

    const handleMarkItemComplete =(itemId)=>{
        const updatedItems = items?.map(item =>{
            if(itemId === item.id)
            item.status = !item.status
            return item;
        })
        setItems(updatedItems);
        // setItems(prevState => [...prevState, updatedItems] );
        // setItems([].concat({updatedItems}))
    }
    const handleDeleteItem = (itemId) =>{
      console.log(itemId);
      console.log(items);
        const updatedItems=items.filter(item=>{
                return item.id!==itemId    
            })
        setItems(updatedItems);
            
            // setItems([].concat({updatedItems}))
    }
    const handleClick = (e) => {
    e.preventDefault();
    if(value==="")
        return;

    setOpen(true);
    setTimeout(() => {
      setLoaded(true);
    }, 500);
    setTimeout(() => {
      setOpen(false);
      setLoaded(false);
      setItems(prevState => [...prevState, newItem] );
        // setItems([].concat(newItem))
        setValue("")
    }, 2000);
     

        
  };
    return (
        <StyledDiv>
            <div className="todo-form">
                <div className="input-effect">
                <input className="effect-2" placeHolder="Add New Todo" type="text" onChange={handleInput} value={value} />
                     <span className="focus-border"></span>
                </div>
                <div className="svg-style">
                    <svg
          style={{
            display: open ? "block" : "none",
          }}
          className={`progress-icon + ${loaded ? "loaded" : ""}`}
          width={30}
          height={30}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <circle
              style={{
                stroke: loaded
                  ? "rgba( 2, 254, 18, 0.25 )"
                  : "rgba( 255, 255, 255, 0.25 )",
              }}
              id="tick-outline-path"
              cx={16}
              cy={16}
              r={13}
            />
            <path
              style={{
                stroke: loaded
                  ? "rgba( 2, 254, 18, 0.25 )"
                  : "rgba( 255, 255, 255, 0.25 )",
              }}
              id="tick-path"
              d="M6.173 16.252l5.722 4.228 9.22-12.69"
              opacity={1}
            />
          </defs>
          <g
            className="tick-icon"
            strokeWidth={2}
            stroke="rgba(0,0,0,.2)"
            fill="none"
            transform="translate(1, 1)"
          >
            <use className="tick-outline" xlinkHref="#tick-outline-path" />
            <use x={2} y={2} className="tick" xlinkHref="#tick-path" />
          </g>
          <g
            className="tick-icon"
            strokeWidth={2}
            stroke="#fff"
            fill="none"
            transform="translate(1, 1.2)"
          >
            <use className="tick-outline" xlinkHref="#tick-outline-path" />
            <use x={2} y={2} className="tick" xlinkHref="#tick-path" />
          </g>
        </svg>
       
                </div>
        <StyledAdd  
        style={{ display: open ? "none" : "inline-block", cursor:'pointer',
 marginTop: '10px', width:'30px',
        height:'30px',
        color: '#fff)'}}
          onClick={handleClick} />
            </div>
            
        <ToDoList items={items} deleteItem={handleDeleteItem} markItemComplete={handleMarkItemComplete} />
        </StyledDiv>
    )
}

export default ToDoApp
