import { ComponentChildren } from "preact";

interface IProps {
  children?: ComponentChildren;
  key?: string;
  class?: string;
  id?: string;
  step?: number;
}

export function FadeIn(
  { children, key, class: className = "", id, step = 0 }: IProps,
) {
  return (
    <div
      class={`opacity-0 animate-fadeIn-${step} ${className}`.trim()}
      id={id}
      key={key}
    >
      {children}
    </div>
  );
}
