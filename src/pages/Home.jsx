import { FiChevronDown, FiMenu } from "react-icons/fi";
import Nav from "../components/Nav";
import { Link } from "react-router";

export default function Home(){
    return(
        <>
            <header className="py-6 flex justify-center">
                <div className="w-0">
                    <button className="absolute left-4"><FiMenu className="text-3xl text-blue-900"/></button>
                </div>
                <h1 className="text-xl center justify-self-center">Smart Home</h1>
            </header>
            <main>
                <section className="flex flex-col mb-8 px-3">
                    <h2 className="pl-2 mb-2 text-font">Energi Forbrug</h2>
                    <div className="bg-white px-3 py-2 flex rounded-xl justify-between shadow-md">
                        <div className="flex py-1 items-center">
                            <img className="bg-main rounded-lg p-2 mr-2" src="/icon_consumption_on.png" alt="consumption icon" />
                            <p className="text-xl text-info">21 jan 2026</p>
                        </div>
                        <div className="flex flex-col text-end">
                            <p className="text-2xl">29,3<span className="text-xs text-info"> kWh</span></p>
                            <p className="text-highlight text-xs">23% mindre end i går</p>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col mb-7">
                    <div className="flex justify-between pl-5 mb-1 pr-3">
                        <h2 className="text-font">Rum</h2>
                        <button className="flex items-center text-font">
                            <span className="mr-2 text-sm">Vis alle</span>
                            <FiChevronDown className="text-info"/>
                        </button>
                    </div>
                    <ul className="flex overflow-auto snap-mandatory snap-x no-scrollbar pt-1 pb-2 px-3">
                        <li className="snap-center snap-always mr-4 bg-white py-2 px-3 rounded-lg shadow-md flex items-center shrink-0">
                            <img className="mr-3" src="/icon_bedroom.png" alt="bedroom icon" />
                            <p className="text-xs text-info">Soveværelse</p>
                        </li>
                        <li className="snap-center snap-always mr-4 bg-white py-2 px-3 rounded-lg shadow-md flex items-center shrink-0">
                            <img className="mr-3" src="/icon_living-room.png" alt="living room icon" />
                            <p className="text-xs text-info">Stue</p>
                        </li>
                        <li className="snap-center snap-always mr-4 bg-white py-2 px-3 rounded-lg shadow-md flex items-center shrink-0">
                            <img className="mr-3" src="/icon_bathroom.png" alt="bathroom icon" />
                            <p className="text-xs text-info">Badeværelse</p>
                        </li>
                        <li className="snap-center snap-always bg-white py-2 px-3 rounded-lg shadow-md flex items-center shrink-0">
                            <img className="mr-3" src="/icon_kitchen.png" alt="kitchen icon" />
                            <p className="text-xs text-info">Køkken</p>
                        </li>
                    </ul>
                </section>
                <section className="flex flex-col mb-8 px-3">
                    <h2 className="pl-2 mb-2 text-font">Forudindstillet</h2>
                    <ul className="grid grid-cols-3">
                        <li className="mr-4 bg-main py-2 px-3 rounded-lg shadow-md flex items-center justify-center">
                            <img className="mr-3" src="/icon_home_on.png" alt="home icon" />
                            <p className="text-xs text-white">Hjemme</p>
                        </li>
                        <li className="mr-4 bg-white py-2 px-3 rounded-lg shadow-md flex items-center justify-center">
                            <img className="mr-3" src="/icon_away_off.png" alt="away icon" />
                            <p className="text-xs text-info">Ude</p>
                        </li>
                        <li className="bg-white py-2 px-3 rounded-lg shadow-md flex items-center justify-center">
                            <img className="mr-3" src="/icon_sleep_off.png" alt="sleep icon" />
                            <p className="text-xs text-info">Sover</p>
                        </li>
                    </ul>
                </section>
                <section className="flex flex-col mb-8">
                    <h2 className="pl-5 mb-3 text-font">Smart indstillinger</h2>
                    <ul className="grid grid-cols-2 gap-3 overflow-auto snap-mandatory snap-y h-[40vh] no-scrollbar px-3 pt-1 pb-2">
                        <li className="bg-white rounded-xl p-3 shadow-md snap-center snap-always flex flex-col">
                            <h3 className="text-sm text-font mb-3">Lys i Stuen</h3>
                            <div className="flex justify-between mb-auto items-center">
                                <p className="text-xs text-info">Alt lys</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <div className="flex justify-between mb-auto items-center">
                                <p className="text-xs text-info">Loftlampe</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <div className="flex justify-between mb-auto items-center">
                                <p className="text-xs text-info">Bordlampe 1</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-info">Bordlampe 2</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                        </li>
                        <li className="bg-white rounded-xl p-3 shadow-md snap-center snap-always">
                            <h3 className="text-sm text-font mb-3">Varme i Stuen</h3>
                            <div className="flex justify-between mb-2 items-center">
                                <p className="text-xs text-info">Fan Coil</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex gap-7 mb-3">
                                    <img className="py-2 pl-1" src="/icon_temp.png" alt="temp icon" />
                                    <div className="flex flex-col justify-center">
                                        <p className="text-lg text-font h-5.5">22°C</p>
                                        <p className="text-xs text-info mb-1">Manuel - mode</p>
                                    </div>
                                </div>
                                <Link to={"/temperature"} className="bg-main flex p-1.5 rounded-lg items-center">
                                    <img src="/icon_temp-setting.png" alt="temp setting icon" />
                                    <span className="text-white text-xs w-full text-center pr-6">Indstillinger</span>
                                </Link>
                            </div>
                        </li>
                        <li className="bg-white rounded-xl p-3 shadow-md snap-center snap-always flex flex-col">
                            <h3 className="text-sm text-font mb-3">Lys i Køkken</h3>
                            <div className="flex justify-between mb-3 items-center">
                                <p className="text-xs text-info">Køkkenbord</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <div className="flex justify-between mb-3 items-center">
                                <p className="text-xs text-info">Loftlampe</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <h3 className="text-sm text-font mb-auto">Varme i Køkken</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-info">Fan Coil</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                        </li>
                        <li className="bg-white rounded-xl p-3 shadow-md snap-center snap-always">
                            <h3 className="text-sm text-font mb-3">Varme i Soveværelse</h3>
                            <div className="flex justify-between mb-2 items-center">
                                <p className="text-xs text-info">Radiator</p>
                                <button className="w-10.5 h-6 rounded-xl bg-mist-300 flex p-0.75 justify-start">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <div>
                                <div className="flex gap-7 mb-3">
                                    <img className="py-2 pl-1" src="/icon_temp.png" alt="temp icon" />
                                    <div className="flex flex-col justify-center">
                                        <p className="text-lg text-font h-5.5">17°C</p>
                                        <p className="text-xs text-info mb-1">Tidsplan - mode</p>
                                    </div>
                                </div>
                                <Link to={"/temperature"} className="bg-main flex p-1.5 rounded-lg items-center">
                                    <img src="/icon_temp-setting.png" alt="temp setting icon" />
                                    <span className="text-white text-xs w-full text-center pr-6">Indstillinger</span>
                                </Link>
                            </div>
                        </li>
                        <li className="bg-white rounded-xl p-3 shadow-md snap-center snap-always flex flex-col">
                            <h3 className="text-sm text-font mb-3">Lys i Indkørsel</h3>
                            <div className="flex justify-between mb-3 items-center">
                                <p className="text-xs text-info">Væglamper</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <div className="flex justify-between mb-3 items-center">
                                <p className="text-xs text-info">Bedlamper</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <h3 className="text-sm text-font mb-auto">Lys i Garage</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-info">Alt lys</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                        </li>
                        <li className="bg-white rounded-xl p-3 shadow-md snap-center snap-always">
                            <h3 className="text-sm text-font mb-3">Varme i Badeværelse</h3>
                            <div className="flex justify-between mb-2 items-center">
                                <p className="text-xs text-info">Gulvvarme</p>
                                <button className="w-10.5 h-6 rounded-xl bg-mist-300 flex p-0.75 justify-start">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <div>
                                <div className="flex gap-7 mb-3">
                                    <img className="py-2 pl-1" src="/icon_temp.png" alt="temp icon" />
                                    <div className="flex flex-col justify-center">
                                        <p className="text-lg text-font h-5.5">21°C</p>
                                        <p className="text-xs text-info mb-1">Tidsplan - mode</p>
                                    </div>
                                </div>
                                <Link to={"/temperature"} className="bg-main flex p-1.5 rounded-lg items-center">
                                    <img src="/icon_temp-setting.png" alt="temp setting icon" />
                                    <span className="text-white text-xs w-full text-center pr-6">Indstillinger</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
            <Nav home/>
        </>
    )
}