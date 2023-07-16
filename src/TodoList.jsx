import React, { useState } from "react";

const TodoList = () =>{
    const[num,setNum]=useState();
    const incrNum=()=>{
        setNum(num+1);
    };
    const decrNum=()=>{
        if(num>0){
        setNum(num-1);
    }else{
        alert('Sorry');
        setNum(0);
    }
};
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <button onClick={incrNum}>Increment</button>
                    <button onClick={decrNum}>Decrement</button>

                </div>
            </div>
        </>
    );
};
export default TodoList;