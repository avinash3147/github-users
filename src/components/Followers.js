import { useGlobalContext } from "../context/context";
import styled from 'styled-components';

const Followers = () => {

    const { followers } = useGlobalContext()

    return (
        <Wrapper>
            <div className='followers'>
                {
                    followers.map((follower) => {
                        const { avatar_url: img, html_url, login } = follower;
                        return (
                            <article key={follower.id}>
                                <img src={img} alt={login} />
                                <div>
                                    <h4>{login}</h4>
                                    <a href={html_url}>{html_url}</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background: var(--clr-white);
    border-top-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
    border- bottom-right-radius: var(--radius);
    position: relative;

    &::before {
        content: 'followers';
        text-transform: capitalize;
        position: absolute;
        transform: translateY(-100%);
        background: var(--clr-white);
        color: var(--clr-grey-5);
        top: 0;
        left: 0;
        border-top-right-radius: var(--radius);
        border-top-left-radius: var(--radius);
        padding: 0.5rem 1rem 0 1rem;
        letter-spacing: var(--spacing);
        font-size: 1rem
    }

    .followers {
        overflow: scroll;
        height: 260px;
        padding: 1rem 2rem;
        display: grid;
        grid-template-rows: repeat(auto-fill, minmax(45px, 1fr));
        gap: 1.25rem 1rem;

        article {
            display: grid;
            grid-template-columns: auto 1fr;
            padding: 0.15rem 0.5rem;
            column-gap: 1rem;
            align-items: center;
            img {
                width: 45px;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
            }

            h4 {
                margin-bottom: 0px;
            }

            a {
                color: var(--clr-grey-5);
            }
        }
    }
`;

export default Followers;