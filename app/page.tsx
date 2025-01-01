'use client'

import Chart from 'chart.js/auto';
import { useEffect, useRef, useState } from 'react';
import tm from '../public/tm.json';
import sm from '../public/sm.json';
import oy from '../public/oy.json';


export default function Home() {

  const graphRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const circleGraphRef = useRef<HTMLCanvasElement | null>(null);
  const circleChartRef = useRef<Chart | null>(null);

  const [selectedDatas, setSelectedDatas] = useState<any>(tm);

  const troisMois = tm;
  const sixMois = sm;
  const unAn = oy;


  useEffect(() => {
    if (graphRef.current) {

      if (chartInstanceRef.current) chartInstanceRef.current.destroy();

      chartInstanceRef.current = new Chart(graphRef.current, {
        type: 'line',
        data: {
          labels: selectedDatas.lineGraph.labels,
          datasets: [{
            label: selectedDatas.lineGraph.label,
            data: selectedDatas.lineGraph.data,
            fill: true,
            borderColor: 'rgb(75, 32, 192)',
            tension: 0.4,
          }],
        },
      });
    }

    if (circleGraphRef.current) {

      if (circleChartRef.current) circleChartRef.current.destroy();

      circleChartRef.current = new Chart(circleGraphRef.current, {
        type: 'doughnut',
        data: {
          labels: selectedDatas.circleGraph.labels,
          datasets: [{
            label: 'Repartition des investissements',
            data: selectedDatas.circleGraph.data,
            backgroundColor: [
              'rgb(95, 52, 212)',
              'rgb(55, 12, 172)',
              'rgb(15, 0, 132)'
            ],
            hoverOffset: 4
          }]
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
      if (circleChartRef.current) circleChartRef.current.destroy();
    };
  }, [selectedDatas]);


  return (
    <main className="w-screen h-screen bg-black text-white p-16 flex gap-4 flex-wrap justify-center ">
      <section className='w-2/3 h-1/2 shadow-xl rounded-2xl bg-white flex justify-center items-center gap-4 px-8 py-4'>
        <canvas ref={graphRef}></canvas>
        <div className='flex flex-col items-center gap-4'>
          <button onClick={() => setSelectedDatas(troisMois)} className='rounded-xl bg-[#4b20c0] text-white font-bold h-8 px-2 transition-all border-2 hover:bg-white hover:text-[#4b20c0] hover:border-[#4b20c0] hover:scale-75'>3M</button>
          <button onClick={() => setSelectedDatas(sixMois)} className='rounded-xl bg-[#4b20c0] text-white font-bold h-8 px-2 transition-all border-2 hover:bg-white hover:text-[#4b20c0] hover:border-[#4b20c0] hover:scale-75'>6M</button>
          <button onClick={() => setSelectedDatas(unAn)} className='rounded-xl bg-[#4b20c0] text-white font-bold h-8 px-2 transition-all border-2 hover:bg-white hover:text-[#4b20c0] hover:border-[#4b20c0] hover:scale-75'>1Y</button>
        </div>
      </section>
      <section className='w-1/4 h-1/2 shadow-xl rounded-2xl bg-white p-8'>
        <canvas ref={circleGraphRef}></canvas>
      </section>
      <section className='w-1/4 h-1/2 shadow-xl rounded-2xl bg-white'></section>
      <section className='w-2/3 h-1/2 shadow-xl rounded-2xl bg-white'></section>
    </main>
  );
}
