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
            <main></main>
        </>
    )
}