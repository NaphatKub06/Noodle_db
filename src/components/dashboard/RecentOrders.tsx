import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    id: "ORD-7891",
    customer: "สมชาย มีสุข",
    product: "ก๋วยเตี๋ยวหมูน้ำตก",
    amount: "฿35",
    status: "สำเร็จ",
    date: "9 ม.ค. 2026",
  },
  {
    id: "ORD-7890",
    customer: "สมหญิง รักดี",
    product: "ก๋วยเตี๋ยวน้ำใส",
    amount: "฿35",
    status: "กำลังทำ",
    date: "9 ม.ค. 2026",
  },
  {
    id: "ORD-7889",
    customer: "วิชัย ใจเย็น",
    product: "ก๋วยเตี๋ยวเย็นตาโฟ",
    amount: "฿35",
    status: "รอดำเนินการ",
    date: "9 ม.ค. 2026",
  },
  {
    id: "ORD-7888",
    customer: "นิตยา สวัสดี",
    product: "สุกี้น้ำ",
    amount: "฿30",
    status: "รอดำเนินการ",
    date: "9 ม.ค. 2026",
  },
  {
    id: "ORD-7887",
    customer: "ประยุทธ์ มั่นคง",
    product: "สุกี้ทะเล",
    amount: "฿30",
    status: "รอดำเนินการ",
    date: "9 ม.ค. 2026",
  },
];

const getStatusVariant = (status: string) => {
  switch (status) {
    case "สำเร็จ":
      return "success";
    case "กำลังทำ":
      return "warning";
    case "รอดำเนินการ":
      return "secondary";
    default:
      return "default";
  }
};

const RecentOrders = () => {
  return (
    <div className="dashboard-card">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">คำสั่งซื้อล่าสุด</h3>
        <p className="text-sm text-muted-foreground">รายการ 5 คำสั่งซื้อล่าสุด</p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">หมายเลข</TableHead>
              <TableHead className="text-muted-foreground">ลูกค้า</TableHead>
              <TableHead className="text-muted-foreground">สินค้า</TableHead>
              <TableHead className="text-muted-foreground">ยอดเงิน</TableHead>
              <TableHead className="text-muted-foreground">สถานะ</TableHead>
              <TableHead className="text-muted-foreground text-right">วันที่</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-border">
                <TableCell className="font-medium text-foreground">{order.id}</TableCell>
                <TableCell className="text-foreground">{order.customer}</TableCell>
                <TableCell className="text-muted-foreground">{order.product}</TableCell>
                <TableCell className="font-semibold text-foreground">{order.amount}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(order.status) as any}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RecentOrders;
