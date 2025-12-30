import React, { useRef, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const TIMEFRAMES = {
  day: { days: 1, title: "Last 24 Hours" },
  week: { days: 7, title: "Last 7 Days" },       // Added week
  month: { days: 30, title: "Last 30 Days" },
  year: { days: 365, title: "Last 365 Days" },
};

const COINS = ["bitcoin", "ethereum", "usdt", "ripple", "litecoin"];

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    y: { beginAtZero: false },
  },
};

function CryptoChart({ vsCurrency = "usd" }) {
  const chartRef = useRef();
  const [timeframe, setTimeframe] = useState("month");
  const [coin, setCoin] = useState("bitcoin"); // Track selected coin
  const [cryptoData, setCryptoData] = useState(null);

  const fetchData = async (coin, days) => {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${vsCurrency}&days=${days}`
    );
    const json = await res.json();
    const labels = json.prices.map(([ts]) =>
      new Date(ts).toLocaleString(
        vsCurrency === "usd" && days <= 1 ? "en-US" : "default",
        {
          dateStyle: days >= 365 ? "short" : "medium",
          timeStyle: days <= 1 ? "short" : undefined,
        }
      )
    );
    const prices = json.prices.map(([_, p]) => p);
    setCryptoData({
      labels,
      datasets: [
        {
          label: `${coin.toUpperCase()} (${vsCurrency.toUpperCase()})`,
          data: prices,
          fill: true,
          backgroundColor: "rgba(22, 101, 52, 0.2)",
          borderColor: "rgba(22, 101, 52, 1)",
          tension: 0.3,
        },
      ],
    });
  };

  useEffect(() => {
    fetchData(coin, TIMEFRAMES[timeframe].days);
  }, [coin, timeframe]);

  useEffect(() => {
    const onBeforePrint = () => chartRef.current?.resize();
    window.addEventListener("beforeprint", onBeforePrint);
    return () => window.removeEventListener("beforeprint", onBeforePrint);
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        {TIMEFRAMES[timeframe].title} Price - {coin.toUpperCase()}
      </h2>

      <div className="flex space-x-2 mb-4">
        {Object.keys(TIMEFRAMES).map((tf) => (
          <button
            key={tf}
            onClick={() => setTimeframe(tf)}
            className={`px-3 py-1 rounded ${
              timeframe === tf ? "bg-green-700 text-white" : "bg-gray-200"
            }`}
          >
            {tf.charAt(0).toUpperCase() + tf.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-6 space-y-3 space-x-4 mb-4">
        {COINS.map((c) => (
          <button
            key={c}
            onClick={() => setCoin(c)}
            className={`px-4 py-1 lg:py-1 text-[18px] md:text-[20px] lg:text-[16px]   rounded ${
              coin === c ? "bg-orange-700 text-white" : "bg-gray-200"
            }`}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      {cryptoData ? (
        <Line ref={chartRef} data={cryptoData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
      <button
        onClick={() => window.print()}
        className="mt-4 bg-orange-800 text-white px-4 py-2 rounded print:hidden"
      >
        Print Chart
      </button>
    </div>
  );
}

export default CryptoChart;
