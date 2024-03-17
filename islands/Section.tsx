import { ComponentChildren, Ref } from "preact";
import { FadeIn } from "../components/FadeIn.tsx";
import { asset } from "$fresh/runtime.ts";

interface IProps {
  children?: ComponentChildren;
  key?: string;
  class?: string;
  id?: string;
  videoSrc?: string;
  ref?: Ref<HTMLElement>;
}

export function Section(
  { children, key, class: className = "", id, videoSrc, ref }: IProps,
) {
  return (
    <section
      id={id}
      class={`snap-start w-screen h-screen max-w-screen max-h-screen ${className}`}
      key={key}
      ref={ref}
    >
      {videoSrc && (
        <video
          class="min-w-screen h-full w-full absolute object-cover opacity-100 z-0"
          autoPlay
          muted
          loop
          key={key}
        >
          <source src={asset(videoSrc)} type="video/webm" />
        </video>
      )}
      {children}
    </section>
  );
}
