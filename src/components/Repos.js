import styled from 'styled-components';
import { ExampleChart } from './Charts';

const Repos = () => {
    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <h4>Repos Component</h4>
                <ExampleChart />
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.section`

`;

export default Repos;