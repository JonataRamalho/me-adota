import * as React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import Title from '../Title';

export default function DonutChart(props) {
  const { name, nameFirst, nameSecond, valueFirst, valueSecond } = props;

  const data = [
    {
      name: `${nameFirst} - ${props.percentFirst ? props.percentFirst : 0}%`,
      value: valueFirst,
      fill: '#0088FE',
    },
    {
      name: `${nameSecond} - ${props.percentSecond ? props.percentSecond : 0}%`,
      value: valueSecond,
      fill: '#00C49F',
    },
  ];

  const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF2F30',
    '#FFFFFF',
    '#8884d8',
  ];

  const renderColorfulLegendText = (value, entry) => {
    return (
      <span style={{ color: '#596579', fontWeight: 500, padding: 10 }}>
        {value}
      </span>
    );
  };

  return (
    <React.Fragment>
      <Title>{name}</Title>
      <ResponsiveContainer>
        <PieChart width={100} height={500}>
          <Legend
            height={36}
            iconType='circle'
            layout='vertical'
            verticalAlign='middle'
            iconSize={10}
            padding={5}
            formatter={renderColorfulLegendText}
          />

          <Pie
            data={data}
            cx={90}
            cy={70}
            dataKey='value'
            outerRadius={70}
            innerRadius={50}
            fill='green'
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
