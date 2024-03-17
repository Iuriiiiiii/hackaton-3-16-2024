import { FadeIn } from "../components/FadeIn.tsx";
import { Foreground } from "../components/Foreground.tsx";
import { Section } from "./Section.tsx";
import { ComponentChildren, Ref } from "preact";

interface IProps {
  ref?: Ref<HTMLElement>;
  pageY?: number;
}
export function Main({ ref, pageY = 0 }: IProps) {
  return (
    <Section
      id="home"
      videoSrc="output.webm"
      ref={ref}
      key="1"
    >
      <Foreground class="z-10 w-screen h-screen flex flex-col justify-center items-center">
        <FadeIn step={2}>
          <h1 class="text-[#C77F0E] text-center md:text-4xl text-shadow-black">
            Jacob Giron!
          </h1>
        </FadeIn>
        <FadeIn step={5}>
          <div class="px-4 text-sm md:text-lg font-bold">
            Inspiration and knowledge come together
          </div>
        </FadeIn>
        <FadeIn step={8} class="my-5">
          <h2>Socials</h2>
        </FadeIn>
        <div class="flex flex-row justify-evenly w-screen max-w-60">
          <FadeIn step={10}>
            <img title="Youtube" width="64px" height="64px" src="youtube.webp" />
          </FadeIn>
          <FadeIn step={12}>
            <img title="Instagram" width="64px" height="64px" src="instagram.webp" />
          </FadeIn>
        </div>
      </Foreground>
    </Section>
  );
}
