import { FiMenu } from "react-icons/fi";
import Nav from "../components/Nav";

export default function Home(){
    return(
        <>
            <header className="py-6 flex justify-center">
                <div className="w-0">
                    <button className="absolute left-6"><FiMenu className="text-4xl text-blue-900"/></button>
                </div>
                <h1 className="text-2xl center justify-self-center">Smart Home</h1>
            </header>
            <main></main>
            <Nav home/>
        </>
    )
}