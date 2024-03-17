import { asset, IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useMemo, useState } from "preact/hooks";

interface IProps {
}

function rotate(array: unknown[], pos: number) {
  const arrayLength = array.length;

  if (pos === 0 || arrayLength === 0 || arrayLength === 1) {
    return [...array];
  }

  const invert = pos < 0;
  const n = Math.abs(pos);
  const result: unknown[] = [];

  for (let i = 0; i < arrayLength; i++) {
    result[i] = array[(i + n) % arrayLength];
  }

  return invert ? result.reverse() : result;
}

export function Carousele({}: IProps) {
  const [currentPage, setCurrentPage] = useState(0);
  // const [images, setImages] = useState<string[]>([]);

  // if (IS_BROWSER) {
  //   useEffect(() => {
  //     const result: string[] = [];

  //     for (let i = 0; i < 33; i++) {
  //       result.push(`testimonials/image (${i}).png`);
  //     }

  //     setImages(result);
  //   }, []);
  // }

  // {images.map((image, index) => (
  //   <img
  //     key={index}
  //     src={image}
  //     alt={`Image ${index}`}
  //     className="md:w-[20%] md:h-[460px]"
  //   />
  // ))}

  return (
    <div class="relative overflow-hidden w-full h-full bg-image animate-downToTop">
      <div class="w-full h-full bg-black opacity-60 absolute top-0 left-0">
      </div>
      <div class="w-full h-full absolute left-0 top-0 flex flex-col justify-center items-center text-white z-10">
        <h2 class="text-center md:text-4xl text-shadow-black">Learn their history</h2>
        <div class="px-4 text-sm md:text-lg font-bold text-center">
          Top CEOs and celebrities tell you their story and advise you how to be
          successful
        </div>
      </div>
    </div>
  );
}
