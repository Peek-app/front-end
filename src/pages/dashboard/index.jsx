import Pets from "../pets";
import Header from "./header";
import SideBar from "./sideBar";

export default function Dashboard() {
  return (
    <main className="bg-gray-100">
      <Header />
      <SideBar />
      <div className="">
        <Pets />
      </div>
    </main>
  );
}
