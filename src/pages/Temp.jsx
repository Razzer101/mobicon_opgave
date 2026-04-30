import { Link } from "react-router";
import Nav from "../components/Nav";
import { FiChevronLeft, FiMoreVertical } from "react-icons/fi";

export default function Temp(){
    return(
        <>
            <header className="py-6 px-4 flex justify-between">
                <Link to={"/"}><FiChevronLeft className="text-4xl text-blue-900"/></Link>
                <h1 className="text-2xl center justify-self-center">Varme</h1>
                <button><FiMoreVertical className="text-3xl text-blue-900"/></button>
            </header>
            <main>
                <section className="flex flex-col mb-8 px-3">
                    <h2 className="pl-2 mb-2 text-font">Stue</h2>
                    <div className="flex flex-col px-4 pt-5 pb-2.5 bg-white shadow-md rounded-xl">
                        <div className="px-10 mb-2">
                            <div className="rounded-full inset-shadow-md h-65 flex justify-center items-center">
                                <div className="h-[65%] w-[65%] rounded-full shadow-custom flex flex-col gap-2.5 justify-center items-center">
                                    <p className="text-5xl text-font">11°C</p>
                                    <p className="text-info">Termostat</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-5">
                                <img className="py-3 pl-1" src="/icon_cloud.png" alt="cloud icon" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-xl">11°C</p>
                                    <p className="text-info text-sm">Udetemperatur</p>
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <img className="py-3" src="/icon_temp.png" alt="temperature icon" />
                                <div className="flex flex-col gap-1">
                                    <p className="text-xl">22°C</p>
                                    <p className="text-info text-sm">Indetemperatur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col mb-8 px-3">
                    <h2 className="pl-2 mb-2 text-font">Ventilator</h2>
                    <div className="bg-white shadow-md rounded-lg flex p-5 gap-5">
                        <img src="/icon_fan-coil.png" alt="fan icon" />
                        <div className="grid grid-cols-6 flex-1 gap-2 py-1.5">
                            <button className="bg-main w-full rounded-l-xl"></button>
                            <button className="bg-main w-full"></button>
                            <button className="bg-main w-full"></button>
                            <button className="bg-icon w-full"></button>
                            <button className="bg-icon w-full"></button>
                            <button className="bg-icon w-full rounded-r-xl"></button>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col mb-8 px-3">
                    <h2 className="pl-2 mb-2 text-font">Mode</h2>
                    <ul className="grid grid-cols-3 gap-4">
                        <li className="bg-white shadow-md rounded-lg flex flex-col items-center pt-4 pb-2.5">
                            <img className="bg-main px-3 py-2.25 rounded-lg mb-2" src="/icon_manual_on.png" alt="manual icon" />
                            <p className="text-sm">Manuel</p>
                        </li>
                        <li className="bg-white shadow-md rounded-lg flex flex-col items-center pt-4 pb-2.5">
                            <img className="bg-icon px-2.5 py-2.25 rounded-lg mb-2" src="/icon_schedule_off.png" alt="schedule icon" />
                            <p className="text-sm">Tidsplan</p>
                        </li>
                        <li className="bg-white shadow-md rounded-lg flex flex-col items-center pt-4 pb-2.5">
                            <img className="bg-icon px-2.5 py-2.25 rounded-lg mb-2" src="/icon_boost_off.png" alt="boost icon" />
                            <p className="text-sm">Boost</p>
                        </li>
                    </ul>
                </section>
                <section className="flex mb-8 px-3 justify-center">
                    <button className="bg-main rounded-full p-3">
                        <img src="/icon_on.png" alt="on icon" />
                    </button>
                </section>
            </main>
        </>
    )
}