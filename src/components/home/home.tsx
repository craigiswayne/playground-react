import './styles.scss';
interface Props {
    links: string[];
}
const Home = ({links}: Props) => {
    return <ul>
        {
            links.map(link => (
                <li key={link}><a href={link}>{link}</a></li>
            ))
        }
    </ul>
}

export default Home;