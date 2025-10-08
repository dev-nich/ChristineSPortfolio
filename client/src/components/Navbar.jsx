import './Navbar.css'
import Link from '@mui/material/Link';

const Navbar = () => {
    return (
        <div id ="navbar" className="navbar">
            <ul>
                <li><Link href="#home">Home</Link></li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#project">Projects</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </div>
        
    )

}


export default Navbar