import { DashboardLayout } from "@/layouts/DashboardLayout"

export default function AuthLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}