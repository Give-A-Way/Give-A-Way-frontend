import { useParams } from "react-router-dom"

export default function ChurchDetails() { 
    const {id} = useParams()
    return (
        <div>
            <h1>CHruch id here{ id}</h1>
        </div>
    )
}