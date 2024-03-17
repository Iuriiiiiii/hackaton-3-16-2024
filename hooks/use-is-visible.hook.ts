import { MutableRef, useEffect, useState } from "preact/hooks";

export function useIsVisible(ref: MutableRef<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    //  @ts-ignore: Stupid ts
    if (!ref?.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    // @ts-ignore: Hacky!
    observer.observe(ref.current!.base);
    return () => {
      observer.disconnect();
    };
  }, [ref?.current]);

  return isIntersecting;
}
