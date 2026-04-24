import { Link } from "react-router";

export default function Nav({home = false, statistic = false}){
    return(
        <nav className="fixed w-full bottom-0">
            <ul className="flex justify-between px-10 py-5 bg-white">
                <li>
                    <Link to={"/"} >
                        <img src={home ? "/icon_menu_dashboad_active.png" : "/icon_menu_dashboad_inactive.png"} alt="Dashboad icon" />
                    </Link>
                </li>
                <li>
                    <Link to={"/statistic"} >
                        <img src={statistic ? "/icon_menu_statistics_active.png" : "/icon_menu_statistics_inactive.png"} alt="statistics icon" />
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <img src="/icon_menu_heating.png" alt="Heating icon" />
                    </Link>
                </li>
                <li>
                    <Link to={"/"} >
                        <img src="/icon_menu_light.png" alt="Light icon" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}