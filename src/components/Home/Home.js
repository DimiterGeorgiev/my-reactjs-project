import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog";
import SideBar from "../SideBar/SideBar";
import "./Home.css";

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                {/* <Catalog/> */}
                <SideBar />
            </div>
        </>
    );
}
