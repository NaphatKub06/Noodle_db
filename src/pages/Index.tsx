import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react";
import Header from "@/components/dashboard/Header";
import StatCard from "@/components/dashboard/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
import CategoryChart from "@/components/dashboard/CategoryChart";
import RecentOrders from "@/components/dashboard/RecentOrders";

const stats = [
  {
    title: "รายได้รวม",
    value: "฿15,000",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "คำสั่งซื้อ",
    value: "137",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: ShoppingCart,
  },
  {
    title: "ลูกค้าใหม่",
    value: "67",
    change: "+23.1%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "อัตราการเติบโต",
    value: "18.7%",
    change: "-2.4%",
    changeType: "negative" as const,
    icon: TrendingUp,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8 md:px-6">
        {/* Page Title */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            สวัสดีครับ, <span className="gradient-text">Admin</span> 👋
          </h1>
          <p className="mt-2 text-muted-foreground">
            นี่คือภาพรวมธุรกิจของคุณในวันนี้
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          <div className="animate-slide-up" style={{ animationDelay: "400ms" }}>
            <RevenueChart />
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "500ms" }}>
            <CategoryChart />
          </div>
        </div>

        {/* Recent Orders */}
        <div className="animate-slide-up" style={{ animationDelay: "600ms" }}>
          <RecentOrders />
        </div>
      </main>
    </div>
  );
};

export default Index;
