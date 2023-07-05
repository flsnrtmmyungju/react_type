import styled from 'styled-components'; 



interface ContainerProps {
    bgCOlor:string;
}

const Container = styled.div<ContainerProps>`
    width:100px;
    height:100px;
    background=color: ${props=>props.bgColor}
    
`;

interface CircleProps {
    bgCOlor:string;
}

function Circle({bgColor}:CircleProps) {
    return <Container bgColor={bgColor}/> ;       
}
export default Circle;