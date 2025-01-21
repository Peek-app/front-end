import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <SideBar />
      {children}
    </main>
  );
}
