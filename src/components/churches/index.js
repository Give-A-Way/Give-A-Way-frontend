import { Link } from "react-router-dom";

export default function Church() { 
    return (
        <div>
            <div>
                <h2>Christian Cultural Center Brooklyn</h2>
                <img width={343} height={201} src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Christian_Cultural_Center_Brooklyn_-_west_side.jpg"></img>
                <p> <strong>Address:</strong> 12020 Flatlands Ave, Brooklyn, NY 11207</p>
                <p><strong>Status:</strong> Resolved</p>
                <button><Link to="2">Donate</Link></button>
            </div>
            <div>
            <h2>Christian Cultural Center Brooklyn</h2>
                <img width={343} height={201} src="https://lh5.googleusercontent.com/p/AF1QipMy4ox_xjqAIasrmHlT9P8klXiX40Dn9qbpRsTe=w408-h544-k-no"></img>
                <p> <strong>Address:</strong> 12020 Flatlands Ave, Brooklyn, NY 11207</p>
                <p><strong>Status:</strong> Pending</p>
                
                <button><Link to="2">Donate</Link></button>
            </div>
            <div>
            <h2>Christian Cultural Center Brooklyn</h2>
                <img width={343} height={201} src="https://lh5.googleusercontent.com/p/AF1QipMLJNFl5GiFZv4ek8Ph0D9BKhnL-pHnzMPEk3ha=w1800-h1689-p-k-no"></img>
                <p> <strong>Address:</strong> Park Slope Community Church</p>
                <p><strong>Status:</strong> Open</p>
                <button><Link to="2">Donate</Link></button>
            </div>
        </div>
    )
}