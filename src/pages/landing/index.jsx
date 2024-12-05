import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Branding from "./branding";
import ExampleArea from "./exampleArea";
import MobileExampleArea from "./mobileExampleArea";
import Mosaic from "./mosaic";
import MobileMosaic from "./mobileMosaic";
import VetArea from "./vetArea";

export default function Landing() {
  const [isClient, setIsClient] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <main>
      <section>
        <Branding />
      </section>
      <section>{isDesktopOrLaptop ? <Mosaic /> : <MobileMosaic />}</section>
      <section>
        <section>
          {isDesktopOrLaptop ? <ExampleArea /> : <MobileExampleArea />}
        </section>
      </section>
      <section>
        <VetArea />
      </section>
    </main>
  );
}
