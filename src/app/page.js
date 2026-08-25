import CardPage from "@/app/cards/page";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <CardPage></CardPage>
    </div>
  );
}
