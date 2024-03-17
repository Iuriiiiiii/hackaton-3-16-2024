import { useEffect, useState } from "preact/hooks";
import { FadeIn } from "../components/FadeIn.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface IProps {
  navClass?: string;
}

export function Navigation({ navClass = "" }: IProps) {
  return (
    <header class="fixed w-screen top-0 right-0 p-4 z-20">
      <FadeIn>
        <nav>
          <ul
            class={`transition-colors flex space-x-2 text-gray-900 justify-between md:justify-end md:gap-x-5 ${navClass}`
              .trim()}
          >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </FadeIn>
    </header>
  );
}
