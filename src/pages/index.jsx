import Navbar from "@/components/NavBar";
import Landing from "./landing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Landing />
      <Footer />
    </main>
  );
}
