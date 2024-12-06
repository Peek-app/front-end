import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

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

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });

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
      <section>
        {isDesktopOrLaptop ? (
          <Mosaic />
        ) : isTablet ? (
          <TabletMosaic />
        ) : (
          <MobileMosaic />
        )}
      </section>
      <section>
        {isDesktopOrLaptop ? (
          <ExampleArea />
        ) : isTablet ? (
          <TabletExampleArea />
        ) : (
          <MobileExampleArea />
        )}
      </section>
      <section>
        <VetArea />
      </section>
    </main>
  );
}
