import type { FC } from 'react';
import './Table.css';
import { useEffect, useState } from 'react';

interface PowerData {
  Minutes1DK: string;
  OffshoreWindPower: number;
  OnshoreWindPower: number;
  SolarPower: number;
  Exchange_Sum: number;
}

interface HourlyAggregatedData {
  hour: string;
  OffshoreWindPower: number;
  OnshoreWindPower: number;
  SolarPower: number;
  Exchange_Sum: number;
}

const Table: FC = () => {
  const [data, setData] = useState<HourlyAggregatedData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.energidataservice.dk/dataset/PowerSystemRightNow?limit=500') 
      .then((res) => {
        if (!res.ok) throw new Error('Fejl i API-kaldet');
        return res.json();
      })
      .then((json) => {
        const raw: PowerData[] = json.records;

        const grouped = raw.reduce<Record<string, HourlyAggregatedData>>((acc, curr) => {
          const hourKey = new Date(curr.Minutes1DK).toISOString().substring(0, 13); // eks: '2025-07-16T12'
          if (!acc[hourKey]) {
            acc[hourKey] = {
              hour: hourKey,
              OffshoreWindPower: 0,
              OnshoreWindPower: 0,
              SolarPower: 0,
              Exchange_Sum: 0
            };
          }
          acc[hourKey].OffshoreWindPower += curr.OffshoreWindPower;
          acc[hourKey].OnshoreWindPower += curr.OnshoreWindPower;
          acc[hourKey].SolarPower += curr.SolarPower;
          acc[hourKey].Exchange_Sum += curr.Exchange_Sum;
          return acc;
        }, {});

        const hourlyData = Object.values(grouped).sort((a, b) => a.hour.localeCompare(b.hour));
        setData(hourlyData);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Henter data...</p>;
  if (error) return <p>Fejl: {error}</p>;

  return (
    <div className="table-container">
      <h2>Power System – Akkumuleret pr. time</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Offshore Wind / MW</th>
            <th>Onshore Wind</th>
            <th>Solar Power</th>
            <th>Exchange Sum</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
                <td>{new Date(`${row.hour}:00:00Z`).toLocaleString()}</td>
                <td>{row.OffshoreWindPower.toLocaleString('da-DK')}</td>
                <td>{row.OnshoreWindPower.toLocaleString('da-DK')}</td>
                <td>{row.SolarPower.toLocaleString('da-DK')}</td>
                <td>{row.Exchange_Sum.toLocaleString('da-DK')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
