'use client'

import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import tm from '../public/tm.json';
import sm from '../public/sm.json';
import oy from '../public/oy.json';


export default function Home() {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const [selectedDatas, setSelectedDatas] = useState<any>(tm);

  const troisMois = tm;
  const sixMois = sm;
  const unAn = oy;


  useEffect(() => {
    if (canvasRef.current) {

      if (chartInstanceRef.current) chartInstanceRef.current.destroy();

      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: 'line',
        data: {
          labels: selectedDatas.labels,
          datasets: [{
            label: selectedDatas.label,
            data: selectedDatas.data,
            fill: true,
            borderColor: 'rgb(75, 32, 192)',
            tension: 0.4,
          }],
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    };
  }, [selectedDatas]);


  return (
    <main className="w-screen h-screen bg-black text-white p-16 flex flex-2 gap-10 flex-wrap justify-center ">
      <section className='w-1/3 h-1/2 shadow-xl rounded-2xl bg-white flex flex-col justify-center px-8 py-4'>
        <canvas ref={canvasRef}></canvas>
        <div className='flex gap-4'>
          <button onClick={() => setSelectedDatas(troisMois)} className='rounded-xl bg-[#4b20c0] text-white font-bold h-8 px-2 transition-all border-2 hover:bg-white hover:text-[#4b20c0] hover:border-[#4b20c0] hover:scale-75'>3M</button>
          <button onClick={() => setSelectedDatas(sixMois)} className='rounded-xl bg-[#4b20c0] text-white font-bold h-8 px-2 transition-all border-2 hover:bg-white hover:text-[#4b20c0] hover:border-[#4b20c0] hover:scale-75'>6M</button>
          <button onClick={() => setSelectedDatas(unAn)} className='rounded-xl bg-[#4b20c0] text-white font-bold h-8 px-2 transition-all border-2 hover:bg-white hover:text-[#4b20c0] hover:border-[#4b20c0] hover:scale-75'>1Y</button>
        </div>
      </section>
      <section className='w-1/3 h-1/2 shadow-xl rounded-2xl bg-white'></section>
      <section className='w-1/3 h-1/2 shadow-xl rounded-2xl bg-white'></section>
      <section className='w-1/3 h-1/2 shadow-xl rounded-2xl bg-white'></section>
    </main>
  );
}
