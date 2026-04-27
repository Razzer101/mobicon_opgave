import { FiMoreVertical } from "react-icons/fi";
import Nav from "../components/Nav";

export default function Statistic(){
        return(
        <>
            <header className="py-6 flex justify-center">
                <h1 className="text-2xl center justify-self-center">Statistik</h1>
                <div className="w-0">
                    <button className="absolute right-6"><FiMoreVertical className="text-3xl"/></button>
                </div>
            </header>          
            <main></main>
            <Nav statistic/>
        </>
    )
}