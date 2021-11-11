import { Info, Navbar, Search, User } from "../components";

const Dashboard = () => {
    return (
        <main>
            <Navbar />
            <Search />
            <Info />
            <User />
        </main>
    )
}

export default Dashboard;