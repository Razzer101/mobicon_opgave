import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { FiChevronDown, FiMoreVertical } from "react-icons/fi";
import Nav from "../components/Nav";
import React from 'react';

export default function Statistic(){
    const data = [
        {day: 'Man', today: 35, average: 37},
        {day: 'Tir', today: 33, average: 37},
        {day: 'Ons', today: 29.3, average: 32},
        {day: 'Tor', average: 33},
        {day: 'Fre', average: 31},
        {day: 'Lør', average: 30},
        {day: 'Søn', average: 27}
    ];

    const customDot = (props) => {
        const { cx, cy, payload } = props;

        if (payload.day !== "Ons") return null;

        return (
            <g>
                <defs>
                    <linearGradient id="barGradient" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="#0f407b" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#0f407b" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <rect x={cx -19} y={cy -5} width={38} height={120} fill="url(#barGradient)"/>
                <circle cx={cx} cy={cy} r={6.5} fill="#fff" stroke="#0f407b" strokeWidth={3} />
            </g>
        );
    };

    const customTick = (props) => {
        const { x, y, payload } = props;
        const isActive = payload.value === "Ons";

        return (
            <text x={x} y={y + 10} textAnchor="middle" fill={isActive ? "#0f407b" : "#878a96"} fontSize="13">
                {payload.value}
            </text>
        );
    };

    const customTooltip = ({payload, label, active}) => {
        if (active && payload && payload.length) {
            return (
            <div className="custom-tooltip bg-white py-1 px-2 rounded-lg">
                <p className="text-xs">{`${payload[0].value} kWh`}</p>
                <div className='h-0'>
                    <div className='relative w-0 h-0 border-l-7 border-l-transparent border-r-7 border-r-transparent border-t-16 border-t-white top-1 left-3'></div>
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
                    <LineChart className='bg-chart pt-10 px-4 rounded-lg shadow-md aspect-[1/0.65]' responsive data={data}>
                        <Line dataKey="average" type="bump" strokeDasharray="11 11" dot={false} stroke='#bbb' strokeWidth={3}/>
                        <Line dataKey="today" type="bump" strokeWidth={3} stroke='#0f407b' dot={customDot} activeDot={false}/>
                        <XAxis dataKey="day" interval="preserveStartEnd" tick={customTick} tickLine={false} axisLine={false} className='text-info'/>
                        <Tooltip content={customTooltip} position={{x: 114, y: 57}}/>
                    </LineChart>
                </section>
                <section className='flex flex-col px-3'>
                    <h2 className="pl-2 mb-2 text-font text-lg">Udgifter</h2>
                    <ul className='flex flex-col'>
                        <li className='flex px-3 py-4 bg-white rounded-lg shadow-md justify-between items-center mb-3'>
                            <div className='flex'>
                                <img className='p-2 my-0.5 mr-3 rounded-xl object-contain bg-icon' src="/icon_expenses_off.png" alt="expenses icon" />
                                <div className='flex flex-col'>
                                    <p className='mb-1.5'>Man</p>
                                    <p className='text-info text-xs'>32,8 kWh</p>
                                </div>
                            </div>
                            <p className='text-xl'>Kr. 89,56</p>
                        </li>
                        <li className='flex px-3 py-4 bg-white rounded-lg shadow-md justify-between items-center mb-3'>
                            <div className='flex'>
                                <img className='p-2 my-0.5 mr-3 rounded-xl object-contain bg-icon' src="/icon_expenses_off.png" alt="expenses icon" />
                                <div className='flex flex-col'>
                                    <p className='mb-1.5'>Tir</p>
                                    <p className='text-info text-xs'>36,0 kWh</p>
                                </div>
                            </div>
                            <p className='text-xl'>Kr. 99,32</p>
                        </li>
                        <li className='flex px-3 py-4 bg-white rounded-lg shadow-md justify-between items-center'>
                            <div className='flex'>
                                <img className='p-2 my-0.5 mr-3 rounded-xl object-contain bg-main' src="/icon_expenses_on.png" alt="expenses icon" />
                                <div className='flex flex-col'>
                                    <p className='mb-1.5'>Ons</p>
                                    <p className='text-info text-xs'>39,3 kWh</p>
                                </div>
                            </div>
                            <p className='text-xl'>Kr. 81,04</p>
                        </li>
                    </ul>
                </section>
            </main>
            <Nav statistic/>
        </>
    )
}