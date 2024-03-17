import { ComponentChildren } from "preact";

interface IProps {
  children?: ComponentChildren;
  key?: string;
  class?: string;
  id?: string;
}

export function Foreground(
  { children, class: className = "", id, key }: IProps,
) {
  return (
    <div class={`z-10 ${className}`.trim()} key={key} id={id}>
      {children}
    </div>
  );
}
