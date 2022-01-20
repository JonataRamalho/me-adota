import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

import Title from '../Title';

export default function LineBarAreaComposedChartGraph(props) {
  const { name, data } = props;


  const dataMock = [
    {
      name: 'Maceió',
      uv: 590,
      pv: 800,
      amt: 1400,
      cnt: 490,
    },
    {
      name: 'Marechal Deodoro',
      uv: 868,
      pv: 967,
      amt: 1506,
      cnt: 590,
    },
    {
      name: 'AL, Tabuleiro do Pinto',
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    // {
    //   name: 'AL, Trapiche da Barra',
    //   uv: 1480,
    //   pv: 1200,
    //   amt: 1228,
    //   cnt: 480,
    // },
    // {
    //   name: 'Al, Tabuleiro dos Martins',
    //   uv: 1520,
    //   pv: 1108,
    //   amt: 1100,
    //   cnt: 460,
    // }
  ];

  return (
    <>
      <Title>{name}</Title>

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data ? data : dataMock}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}
