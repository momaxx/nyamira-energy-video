import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Bar, Pie } from "recharts";

import {
  BarChart,
  Bar as RBar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie as RPie,
  Cell,
  Legend,
} from "recharts";

const consumptionData = [
  { name: "Current", value: 31700 },
  { name: "Warning", value: 50000 },
  { name: "Critical", value: 70000 },
];

const energySourceData = [
  { name: "Renewable", value: 48.2 },
  { name: "Non-Renewable", value: 51.8 },
];

const COLORS = ["#4ade80", "#9ca3af"];

export default function EnergyDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <Card className="col-span-1">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Energy Consumption Levels</h2>
          <BarChart width={400} height={300} data={consumptionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <RBar dataKey="value" fill="#60a5fa" />
          </BarChart>
        </CardContent>
      </Card>

      <Card className="col-span-1">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Energy Source Breakdown</h2>
          <PieChart width={400} height={300}>
            <RPie
              data={energySourceData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {energySourceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </RPie>
            <Tooltip />
            <Legend />
          </PieChart>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-2">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Live Summary</h2>
          <p><strong>Last Update:</strong> 2025-07-15 06:27:19.512</p>
          <p><strong>Status:</strong> NORMAL</p>
          <p><strong>Current Consumption:</strong> 31,700.00 kWh</p>
          <p><strong>Renewable Energy:</strong> 48.2%</p>
          <div className="mt-4">
            <p className="mb-2">Renewable Energy Contribution:</p>
            <Progress value={48.2} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
