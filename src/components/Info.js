import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { useGlobalContext } from '../context/context';

const Info = () => {

    const { githubUser } = useGlobalContext()
    const { public_repos, public_gists, followers, following } = githubUser

    const items = [
        {
            id: 1,
            value: public_repos,
            icon: <GoRepo className='icon repo-icon' />,
            label: 'repos'
        },
        {
            id: 2,
            value: followers,
            icon: <FiUsers className='icon followers-icon' />,
            label: 'followers'
        },
        {
            id: 3,
            value: following,
            icon: <FiUserPlus className='icon following-icon' />,
            label: 'following'
        },
        {
            id: 4,
            value: public_gists,
            icon: <GoGist className='icon gists-icon' />,
            label: 'gists'
        }
    ]

    return (
        <section className='section'>
            <Wrapper className='section-center'>
                {
                    items.map((item) => {
                        return <Item key={item.id} {...item} />
                    })
                }
            </Wrapper>
        </section>
    )
}

const Item = ({ value, icon, label }) => {
    return (
        <article className='item'>
            <span>{icon}</span>
            <div>
                <h3>{value}</h3>
                <p>{label}</p>
            </div>
        </article>
    )
}

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem 2rem;
    @media (min-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
    
    .item {
        background: #fff;
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
        border-radius: var(--radius);
        padding: 1rem 2rem;
        column-gap: 3rem;

        .icon {
            font-size: 1.5rem;
        }

        .repo-icon {
            color: #da4a91;
            background: #ffe0f0;
        }

        .followers-icon {
            background: var(--clr-primary-10);
            color: var(--clr-primary-5);
        }

        .following-icon {
            background: #e6e6ff;
            color: #5d55fa;
        }

        .gists-icon {
            background: #fffbea;
            color: #fob429;
        }   

        h3 {
            margin-bottom: 0;
            letter-spacing: 0;
        }

        p {
            text-transform: capitalize;
            margin-bottom: 0;
        }
    }
`;

export default Info;