import Container from '@mui/material/Container';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
const Contact = () => {
    return (
        <Container id="contact" className="section">
            <h1>Get In Touch</h1>
            <ul className="nav">
                <li><a href="mailto:dev.christines@gmail.com" target="_blank"><AlternateEmailIcon/></a></li>
                <li><a href="https://www.linkedin.com/in/christine-sapuras-111a0b90/" target="_blank"><LinkedInIcon /></a></li>
                </ul>

        </Container>
    )
}

export default Contact