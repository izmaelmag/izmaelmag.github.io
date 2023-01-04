import dynamic from "next/dynamic";

// Prevents undefined window error caused by p5.js
export const P5Sketch = dynamic(() => import("./P5Sketch"), {
  ssr: false,
});
