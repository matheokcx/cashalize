'use client'

import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import data from '../public/data.json';

export default function Home() {

  const graphRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const circleGraphRef = useRef<HTMLCanvasElement | null>(null);
  const circleChartRef = useRef<Chart | null>(null);

  const barGraphRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<Chart | null>(null);

  const troisMois = data.tm;
  const sixMois = data.sm;
  const unAn = data.oy;
  const [selectedDatas, setSelectedDatas] = useState<any>(troisMois);

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

    if (barGraphRef.current) {

      if (barChartRef.current) barChartRef.current.destroy();

      barChartRef.current = new Chart(barGraphRef.current, {
        type: 'bar',
        data: {
          labels: selectedDatas.barGraph.labels,
          datasets: [{
            label: 'Repartition par categories',
            data: selectedDatas.barGraph.data,
            backgroundColor: [
              'rgb(135, 92, 255)'
            ],
            borderColor: [
              'rgb(85, 52, 212)'
            ],
            borderWidth: 1
          }]
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
      if (circleChartRef.current) circleChartRef.current.destroy();
      if (barChartRef.current) barChartRef.current.destroy();
    };
  }, [selectedDatas]);

  return (
    <main className="w-screen lg:h-screen dark:bg-[#303030] bg-[#fefefe] flex flex-wrap items-center gap-10 lg:gap-0 p-10">
      <section className='w-full lg:h-2/5 dark:bg-black bg-white shadow-lg rounded-3xl flex flex-col lg:flex-row justify-center items-center gap-10 p-8'>
        <canvas ref={graphRef}></canvas>
        <div className='flex lg:flex-col items-center gap-8'>
          <button onClick={() => setSelectedDatas(troisMois)} className='rounded-xl bg-[#4b20c0] text-white font-bold h-8 px-2 transition-all dark:border-0 border-2 hover:bg-white hover:text-[#4b20c0] hover:border-[#4b20c0] hover:scale-75'>3M</button>
          <button onClick={() => setSelectedDatas(sixMois)} className='rounded-xl bg-[#4b20c0] text-white font-bold h-8 px-2 transition-all dark:border-0 border-2 hover:bg-white hover:text-[#4b20c0] hover:border-[#4b20c0] hover:scale-75'>6M</button>
          <button onClick={() => setSelectedDatas(unAn)} className='rounded-xl bg-[#4b20c0] text-white font-bold h-8 px-2 transition-all dark:border-0 border-2 hover:bg-white hover:text-[#4b20c0] hover:border-[#4b20c0] hover:scale-75'>1Y</button>
        </div>
      </section>
      <section className='w-full lg:h-2/5 shadow-lg rounded-3xl dark:bg-black bg-white flex flex-col lg:flex-row justify-around items-center gap-10 lg:gap-0 p-8'>
        <canvas ref={circleGraphRef}></canvas>
        <canvas ref={barGraphRef}></canvas>
      </section>
    </main>
  );
}
