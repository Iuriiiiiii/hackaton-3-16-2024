import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";
import { Main } from "../islands/Main.tsx";
import { Navigation } from "../islands/Navigation.tsx";
import { Section } from "../islands/Section.tsx";
import { Testimonials } from "../islands/Testimonials.tsx";

interface IProps {}

export function Body(props: IProps) {
  const [pageY, setPageY] = useState(0);

  if (IS_BROWSER) {
    useEffect(() => {
      const intervalHandler = setInterval(() => {
        const pageIndex = Math.ceil(
          (globalThis.scrollY + 5) / globalThis.innerHeight,
        );
        setPageY(pageIndex);
      }, 50);

      return () => clearInterval(intervalHandler);
    }, []);
  }

  return (
    <main>
      <Navigation navClass={pageY === 2 ? "!text-gray-200" : ""} />
      <Main pageY={pageY} />
      <Testimonials pageY={pageY} />

      <Section id="about" class="bg-white" key="3">
      </Section>
      <Section id="contact" class="bg-purple-500 py-8 px-4" key="4">
        <span>PAGE 4</span>
      </Section>
    </main>
  );
}
