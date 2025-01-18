import React from "react";

export default function Home() {
  console.log("page.tsx");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-red-500 dark:text-green-500">Hi</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium,
        nam! Optio, possimus soluta fugit assumenda ipsum tenetur maiores facere
        mollitia fuga blanditiis voluptate magni dolore ab quia aperiam id iure.
      </div>
    </div>
  );
}
