import { Ref } from "preact/hooks";
import { Carousele } from "../components/Carousele.tsx";
import { Section } from "./Section.tsx";

interface IProps {
  ref?: Ref<HTMLElement>;
  pageY?: number;
}

export function Testimonials({ ref, pageY = 0 }: IProps) {
  return (
    <Section
      id="testimonials"
      class="bg-black flex justify-center"
      ref={ref}
      key="2"
    >
      <Carousele />
    </Section>
  );
}
