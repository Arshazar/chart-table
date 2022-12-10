import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import s from './Chart.module.css'
import db from '../../../db/chart.json'

const Chart = () => {
  return (
    <div className={s.container}>
      <h2>Chart name number one</h2>
      <BarChart width={800} height={500} data={db.data} className={s.chart}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#0600bf" />
        <Bar dataKey="uv" fill="#c40632" />
      </BarChart>
    </div>
  )
}

export { Chart }
