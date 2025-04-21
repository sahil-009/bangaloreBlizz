"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan 1",
    total: 45,
  },
  {
    name: "Jan 2",
    total: 38,
  },
  {
    name: "Jan 3",
    total: 52,
  },
  {
    name: "Jan 4",
    total: 61,
  },
  {
    name: "Jan 5",
    total: 55,
  },
  {
    name: "Jan 6",
    total: 67,
  },
  {
    name: "Jan 7",
    total: 62,
  },
  {
    name: "Jan 8",
    total: 71,
  },
  {
    name: "Jan 9",
    total: 65,
  },
  {
    name: "Jan 10",
    total: 80,
  },
  {
    name: "Jan 11",
    total: 95,
  },
  {
    name: "Jan 12",
    total: 86,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="total" fill="#2E8EFF" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
