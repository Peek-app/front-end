import React, { useState, useEffect } from "react";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

import Branding from "./branding";
import Mosaic from "./mosaic";
import MobileMosaic from "./mobileMosaic";
import TabletMosaic from "./tabletMosaic";
import ExampleArea from "./exampleArea";
import TabletExampleArea from "./tabletExampleArea";
import MobileExampleArea from "./mobileExampleArea";
import VetArea from "./vetArea";

export default function Landing() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main>
      <Navbar />
      <section>
        <Branding />
      </section>
      <section>
        <MobileMosaic className="flex flex-col md:hidden" />
        <TabletMosaic className="hidden md:flex flex-col lg:hidden" />
        <Mosaic className="hidden lg:flex flex-col" />
      </section>
      <section>
        <MobileExampleArea className="flex flex-col md:hidden" />
        <TabletExampleArea className="hidden md:flex flex-col lg:hidden" />
        <ExampleArea className="hidden lg:grid" />
      </section>
      <section>
        <VetArea />
      </section>
      <Footer />
    </main>
  );
}
