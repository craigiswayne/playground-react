import './styles.scss';
interface Props {
    routes: { pathName: string }[];
}
const Home = ({routes}: Props) => {
    return <>
        <h1>Home Page</h1>
        <ul>
            {
                routes.map(route => (
                    <li key={route.pathName}><a href={route.pathName}>{route.pathName}</a></li>
                ))
            }
        </ul>
    </>
}

export default Home;