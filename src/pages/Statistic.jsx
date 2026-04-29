import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { FiChevronDown, FiMoreVertical } from "react-icons/fi";
import Nav from "../components/Nav";

export default function Statistic(){
    const data = [
        {name: 'Man', today: 35, average: 37},
        {name: 'Tir', today: 33, average: 37},
        {name: 'Ons', today: 29.3, average: 32},
        {name: 'Tor', average: 33},
        {name: 'Fre', average: 31},
        {name: 'Lør', average: 30},
        {name: 'Søn', average: 27}
    ];

    const customTooltip = ({payload, label, active}) => {
        if (active && payload && payload.length) {
            return (
            <div
                className="custom-tooltip"
                style={{
                backgroundColor: '#fff',
                paddingBottom:"5px",
                paddingTop:"5px",
                paddingLeft:"9px",
                paddingRight:"9px",
                borderRadius: '5px',
                }}
            >
                <p className="text-xs">{`${payload[0].value} kWh`}</p>
                <div className='h-0'>
                    <div className='relative w-0 h-0 border-l-7 border-l-transparent border-r-7 border-r-transparent border-t-16 border-t-white top-1 left-5'></div>
                </div>
            </div>
            );
        }

        return null;
    }

        return(
        <>
            <header className="py-6 flex justify-center">
                <h1 className="text-2xl center justify-self-center">Statistik</h1>
                <div className="w-0">
                    <button className="absolute right-4"><FiMoreVertical className="text-3xl"/></button>
                </div>
            </header>          
            <main>
                <section className='px-3 mb-8'>
                    <div className="flex justify-between pl-2 mb-3">
                        <h2 className="text-font">Forbrug</h2>
                        <button className="flex items-center text-font">
                               <span className="mr-1 text-xs">Ugentligt</span>
                            <FiChevronDown className="text-info"/>
                        </button>
                    </div>
                    <LineChart className='bg-chart pt-14 px-4 rounded-lg shadow-md aspect-[1/0.65]' responsive data={data}>
                    {/*'basis' | 'basisClosed' | 'basisOpen' | 'bumpX' | 'bumpY' | 'bump' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter*/}
                        <Line dataKey="today" type="bump"/>
                        <Line dataKey="average" type="bump"/>
                        <XAxis dataKey="name" interval="preserveStartEnd" tick={{fontSize: "15"}} tickLine={{stroke: ""}} axisLine={{stroke: ""}} stroke='#878a96' className='text-info'/>
                        <Tooltip content={customTooltip} active />
                    </LineChart>
                </section>
                <section className='flex flex-col px-3'>
                    <h2 className="pl-2 mb-2 text-font text-lg">Udgifter</h2>
                    <ul>
                        <li>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                            <p></p>
                        </li>
                        <li>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                            <p></p>
                        </li>
                        <li>
                            <div>
                                <img src="" alt="" />
                                <div>
                                    <p></p>
                                    <p></p>
                                </div>
                            </div>
                            <p></p>
                        </li>
                    </ul>
                </section>
            </main>
            <Nav statistic/>
        </>
    )
}