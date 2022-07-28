import { useLocation } from "react-router-dom"

export default function Employeedetail(){
    let {state} = useLocation()
    return (
        <div>
            <h3>Employee detail:</h3>
            <p>Name: {state.name}</p>
            <p>Age: {state.age}</p>
            <p>ID: {state.id}</p>
        </div>
    )
}