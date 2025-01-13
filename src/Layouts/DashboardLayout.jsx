import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <main className="bg-gray-100 h-full">
      <Header />
      <SideBar />
      {children}
    </main>
  );
}
