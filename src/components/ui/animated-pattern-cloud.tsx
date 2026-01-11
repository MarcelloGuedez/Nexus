import { cn } from "@/lib/utils";
import React, { useState } from "react";

export const Component: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn("flex flex-col items-center gap-4 p-4 rounded-lg bg-red-900/50")}> 
      <h1 className="text-2xl font-bold mb-2 text-red-300">Component Example</h1>
      <h2 className="text-xl font-semibold">{count}</h2>
      <div className="flex gap-2">
        <button className="px-3 py-1 rounded bg-red-700/60" onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button className="px-3 py-1 rounded bg-red-600" onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
};

export default Component;
