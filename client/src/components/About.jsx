import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';


const About = () => {
    return (
        <Container id="about" className="section">
            <h1>About Me</h1>
            <Grid container spacing={2}>
                <Grid size={3}>
                    <Grid size={12}><h3>Frontend</h3></Grid>
                    <Grid size={12}>React</Grid>
                    <Grid size={12}>Material UI</Grid>
                </Grid>
                <Grid size={3}>
                    <Grid size={12}><h3>Backend</h3></Grid>
                    <Grid size={12}>PHP</Grid>
                </Grid>
                <Grid size={3}>
                    <Grid size={12}><h3>Architecture</h3></Grid>
                    <Grid size={12}>AWS - ECS, EC2, RDS, SQS</Grid>
                </Grid>
                <Grid size={3}>
                    <Grid size={12}><h3>CMS</h3></Grid>
                    <Grid size={12}>Wordpress</Grid>
                </Grid>
                <Grid size={12}>
                    <Grid size={12}><h3>Companies I've Worked With</h3></Grid>
                    <Grid size={12}>Surefire Local</Grid>
                    <Grid size={12}>Lamudi</Grid>
                </Grid>
            </Grid>

        </Container>
    )
}
        

export default About