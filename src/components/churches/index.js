import { Link } from "react-router-dom";

export default function Churchers() { 
    return (
        <div>
            <div>
                <h1>Churche 1</h1>
                <Link to="1"> to data</Link>
            </div>
            <div>
                <h1>Churche 2</h1>
                <Link to="2"> to data</Link>
            </div>
            <div>
                <h1>Churche 2</h1>
                <Link to="3">to data</Link>
            </div>
        </div>
    )
}