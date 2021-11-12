import styled from 'styled-components';
import { MdSearch } from 'react-icons/md'

const Search = () => {
    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <form className='search-form'>
                    <MdSearch />
                    <input 
                        type='text'
                        placeholder='Enter Github UserName'
                    />
                    <button className='btn'>search</button>
                </form>
                <h3>Requests : 60 /60</h3>
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.section`
    // background: var(--clr-white);
    position: relative;
    display: grid;
    gap: 1rem 1.75rem;
    @media (min-width: 768px) {
        grid-template-columns: 1fr max-content;
        align-items: center;

        h3 {
            padding: 0 0.5rem;
        }
    }

    .search-form {
        background: var(--clr-white);
        padding: 0.5rem;
        display: grid;
        grid-template-columns: auto 1fr auto;
        column-gap: 0.5rem;
        border-radius: var(--radius);
        align-items: center;

        input {
            border: none;
            outline: none;
            padding: 0.25rem 0.5rem;
            border-bottom: 1px solid var(--clr-grey-5);
            letter-spacing: var(--spacing);
        }

        input::placeholder {
            color: var(--clr-grey-5);
            text-tranform: capitalize;
            letter-spacing: var(--spacing);
        }

        button {
            border-radius: 5px;
            border-color: transparent;
            padding: 0.25rem 0.5rem;
            cursor: pointer;
            transition: var(--transition);
            color: var(--clr-white);
            text-transform: capitalize;
            letter-spacing: var(--spacing);
            background: var(--clr-primary-5);
            &:hover {
                background: var(--clr-primary-8);
                color: var(--clr-primary-1);
            }
        }

        svg {
            color: var(--clr-grey-5);
        }

        input,
        button,
        svg {
            font-size: 1.3rem
        }

        @media (max-width: 800px) {
            button,
            input,
            svg {
                font-size: 0.85rem;
            }
        }
    }

    h3 {
        margin-bottom: 0px;
        color: var(--clr-grey-5);
        font-weight: 400;
    }
`;

export default Search;