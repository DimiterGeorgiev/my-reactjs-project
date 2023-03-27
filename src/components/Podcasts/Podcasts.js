import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import SideBar from "../SideBar/SideBar";
import "./Podcasts.css";

export default function Home({
    podcasts
}) {
    return (
        <>
            <Header />
            <div className="home">
                <Catalog podcasts={podcasts}/>
                <SideBar />
            </div>
        </>
    );
}