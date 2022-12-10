import styled from "styled-components";

const About= ()=> {
    return(
        <Container>
           <p> A university is an institution of higher education and research which awards 
            academic degrees in several academic disciplines. Universities typically offer both undergraduate 
            and postgraduate programs. In the United States, the designation is reserved for colleges that have a 
            graduate school</p>
        </Container>
    )
}

export default About;


const Container = styled.div`
max-width:1200px;
margin:auto;
p{
    text-align: center;
    padding: 10px;
    color: white;
    font-size: 37px;
    background-color: #5e8dc3e0;
    border: 1px solid #9d1b3d;
    border-radius: 20px;
}

`