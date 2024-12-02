import Branding from "./branding";
import ExampleArea from "./exampleArea";
import Mosaic from "./mosaic";

export default function Landing() {
  return (
    <main>
      <section>
        <Branding />
      </section>
      <section>
        <Mosaic />
      </section>
      <section>{/* <ExampleArea /> */}</section>
    </main>
  );
}
