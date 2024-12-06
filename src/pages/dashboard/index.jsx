import Header from "./header";
import SideBar from "./sideBar";

export default function Dashboard() {
  return (
    <main className="bg-white">
      <Header />
      <div className="grid grid-cols-12 gap-4 p-t-[80px]">
        <div className="col-span-1 text-gray-500 relative h-[100vh]">
          <SideBar />
        </div>
        <div className="col-span-11 text-gray-500">contenido</div>
      </div>
    </main>
  );
}
