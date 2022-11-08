import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {
    let myStyle = {
        minHeight: "70vh",
        margin: "10px auto"

    }
    return (
        <div>
            <div className="container my-3" style={myStyle}>
                <h3 className="my-3 ">Todos Logs</h3>
                {props.todos.length === 0 ? "No Todo's Logs are available" :
                    props.todos.map((todo) => {
                        return (
                            <>
                                <TodoItem todo={todo} onDelete={props.onDelete} key={todo.sno} />
                                <hr />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todos

{/*
<----------------------------Notes------------------------------>
Defination of map() functions
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

Calls a defined callback function on each element of an array, and returns an array that contains the results.

*/}
