import { FiChevronDown, FiMenu } from "react-icons/fi";
import Nav from "../components/Nav";

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
                    <ul className="flex overflow-auto snap-mandatory snap-x scroll no-scrollbar pt-1 pb-2 px-3">
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
                    <h2 className="pl-5 mb-1 text-font">Smart indstillinger</h2>
                    <ul className="grid grid-cols-2 gap-3 overflow-auto h-[40vh] no-scrollbar px-3 pt-1 pb-2">
                        <li className="bg-white rounded-xl p-3 shadow-md">
                            <h3 className="text-sm text-font mb-3">Lys i Stuen</h3>
                            <div className="flex justify-between mb-3 items-center">
                                <p className="text-xs text-info">Alt lys</p>
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
                            <div className="flex justify-between mb-3 items-center">
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
                        <li className="bg-white rounded-xl p-3 shadow-md">
                            <h3 className="text-sm text-font mb-3">Varme i Stuen</h3>
                            <div className="flex justify-between mb-3 items-center">
                                <p className="text-xs text-info">Fan Coil</p>
                                <button className="w-10.5 h-6 rounded-xl bg-main flex p-0.75 justify-end">
                                    <span className="bg-white w-4.5 rounded-2xl"></span>
                                </button>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p></p>
                                    <p></p>
                                </div>
                                <button>
                                    <img src="" alt="" />
                                    <span>Indstillinger</span>
                                </button>
                            </div>
                        </li>
                        <li className="bg-white rounded-xl p-3 shadow-md">
                            <h3>Lys i Køkken</h3>
                            <div>
                                <p>Køkkenbord</p>
                                <button>
                                    <span></span>
                                </button>
                            </div>
                            <div>
                                <p>Loftlampe</p>
                                <button>
                                    <span></span>
                                </button>
                            </div>
                            <h3>Varme i Køkken</h3>
                            <div>
                                <p>Fan Coil</p>
                                <button>
                                    <span></span>
                                </button>
                            </div>
                        </li>
                        <li className="bg-white rounded-xl p-3 shadow-md">
                            <h3>Varme i Soveværelse</h3>
                            <div>
                                <p>Radiator</p>
                                <button>
                                    <span></span>
                                </button>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p></p>
                                    <p></p>
                                </div>
                                <button>
                                    <img src="" alt="" />
                                    <span>Indstillinger</span>
                                </button>
                            </div>
                        </li>
                        <li className="bg-white rounded-xl p-3 shadow-md">
                            <h3>Lys i Indkørsel</h3>
                            <div>
                                <p>Væglamper</p>
                                <button>
                                    <span></span>
                                </button>
                            </div>
                            <div>
                                <p>Bedlamper</p>
                                <button>
                                    <span></span>
                                </button>
                            </div>
                            <h3>Lys i Garage</h3>
                            <div>
                                <p>Alt lys</p>
                                <button>
                                    <span></span>
                                </button>
                            </div>
                        </li>
                        <li className="bg-white rounded-xl p-3 shadow-md">
                            <h3>Varme i Badeværelse</h3>
                            <div>
                                <p>Gulvvarme</p>
                                <button>
                                    <span></span>
                                </button>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p></p>
                                    <p></p>
                                </div>
                                <button>
                                    <img src="" alt="" />
                                    <span>Indstillinger</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
            <Nav home/>
        </>
    )
}