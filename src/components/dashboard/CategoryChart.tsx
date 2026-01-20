import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { category: "ก๋วยเตี๋ยวหมูน้ำตก", sales: 4500, target: 5000 },
  { category: "ก๋วยเตี๋ยวน้ำใส", sales: 3200, target: 3500 },
  { category: "ก๋วยเตี๋ยวเย็นตาโฟ", sales: 2800, target: 2500 },
  { category: "สุกี้น้ำ", sales: 2100, target: 2000 },
  { category: "สุกี้ทะเล", sales: 1800, target: 2200 },
  { category: "สุกี้แห้ง", sales: 1200, target: 1500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="font-semibold text-foreground">{label}</p>
        <p className="text-sm text-primary">
          ยอดขาย: {payload[0].value.toLocaleString()} ชาม
        </p>
        <p className="text-sm text-chart-3">
          เป้าหมาย: {payload[1]?.value.toLocaleString()} ชาม
        </p>
      </div>
    );
  }
  return null;
};

const CategoryChart = () => {
  return (
    <div className="dashboard-card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">ยอดขายตามหมวดหมู่</h3>
        <p className="text-sm text-muted-foreground">เปรียบเทียบกับเป้าหมาย</p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
            <XAxis
              dataKey="category"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="sales"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              barSize={24}
            />
            <Bar
              dataKey="target"
              fill="hsl(var(--chart-3))"
              radius={[4, 4, 0, 0]}
              barSize={24}
              opacity={0.5}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CategoryChart;
