declare module "*.svg" {
  // this is what allows us to export as a react component
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  // this is what will use as the source
  const src: string;
  export default src;
}
