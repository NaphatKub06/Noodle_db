import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

const StatCard = ({ title, value, change, changeType, icon: Icon }: StatCardProps) => {
  return (
    <div className="stat-card group">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight text-foreground">{value}</p>
        </div>
        <div className="stat-card-icon">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
            changeType === "positive" && "bg-success/10 text-success",
            changeType === "negative" && "bg-destructive/10 text-destructive",
            changeType === "neutral" && "bg-muted text-muted-foreground"
          )}
        >
          {change}
        </span>
        <span className="text-xs text-muted-foreground">จากเดือนที่แล้ว</span>
      </div>
    </div>
  );
};

export default StatCard;
