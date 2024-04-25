import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { Callout } from "./callout";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

// Pour intégrer images et code dans mdx
const components = {
  Image,
  Callout,
};

interface MDXProps {
  code: string;
}

export function MDXContent({ code }: MDXProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
