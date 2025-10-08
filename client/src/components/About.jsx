import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';


const About = () => {
    return (
        <Container id="about" className="section">
            <h1>About Me</h1>
            <ul>
                <li><h3>Frontend</h3></li>
                <li>React JS</li>
                <li>Material UI</li>
            </ul>
            <ul>
                <li><h3>Backend</h3></li>
                <li>PHP</li>
                <li>Python</li>
            </ul>
        </Container>
    )
}
        

export default About