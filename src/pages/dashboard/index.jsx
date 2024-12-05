import Header from "./header";
export default function Dashboard() {
  return (
    <main className="bg-white">
      <Header />
      <div class="grid grid-cols-12 gap-4 p-t-[80px]">
        <div className="col-span-2 text-gray-500">menu</div>
        <div className="col-span-10 text-gray-500">contenido</div>
      </div>
    </main>
  );
}
