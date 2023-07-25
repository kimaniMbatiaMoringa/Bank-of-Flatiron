import React from "react";
import Transactions from './Transactions';
import {useState} from "react"

function AddTransaction(props){
    const [form, setForm] = useState({
        date: '',
        description: "",
        category: "",
        amount: ""
    })

    props.func("My Name is K Mbatia")

    const handleChange = (event) =>{
        setForm({
            ...form,                                //Copies the existing form object on line
            [event.target.id]: event.target.value,  //Sets the object properties and their keys
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        alert(form.date +"" + form.description + "" + form.category + "" + form.amount)
        //setDescription(descriptionInput)
        const serverOptions={
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(form)
        }
        fetch("http://localhost:4000/transactions", serverOptions)
    }

    return(
        <>
        <form onSubmit={handleSubmit} id="new-item-form">
            <input id = "date" type="date" onChange={handleChange} placeholder="Enter Date" ></input>
            <input id="description" onChange={handleChange} type="text" placeholder="Enter Description" ></input>
            <input id="category" onChange={handleChange} type="text" placeholder="Enter Category" ></input>
            <input id="amount" onChange={handleChange} type="text" placeholder="Enter Amount" ></input>
            <button type="submit">Add Transaction</button>
        </form>

          </>
        
    )

}
export default AddTransaction