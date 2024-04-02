import Image from "next/image";
import { Comp1 } from "./components/comp1";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1 className="text-3xl">Welcome to the Next.js app</h1>
      <Comp1 param="some parameter" />


    </main>
  );
}
