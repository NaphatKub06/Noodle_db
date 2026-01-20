import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "ม.ค.", revenue: 186000, orders: 120 },
  { month: "ก.พ.", revenue: 205000, orders: 145 },
  { month: "มี.ค.", revenue: 237000, orders: 168 },
  { month: "เม.ย.", revenue: 273000, orders: 189 },
  { month: "พ.ค.", revenue: 209000, orders: 142 },
  { month: "มิ.ย.", revenue: 314000, orders: 215 },
  { month: "ก.ค.", revenue: 298000, orders: 198 },
  { month: "ส.ค.", revenue: 342000, orders: 234 },
  { month: "ก.ย.", revenue: 389000, orders: 267 },
  { month: "ต.ค.", revenue: 423000, orders: 289 },
  { month: "พ.ย.", revenue: 478000, orders: 312 },
  { month: "ธ.ค.", revenue: 512000, orders: 345 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <p className="font-semibold text-foreground">{label}</p>
        <p className="text-sm text-primary">
          รายได้: {formatCurrency(payload[0].value)}
        </p>
        <p className="text-sm text-chart-2">
          คำสั่งซื้อ: {payload[1]?.value} รายการ
        </p>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  return (
    <div className="dashboard-card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">ภาพรวมรายได้</h3>
        <p className="text-sm text-muted-foreground">รายได้และคำสั่งซื้อรายเดือน</p>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="month"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="hsl(var(--chart-2))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorOrders)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
