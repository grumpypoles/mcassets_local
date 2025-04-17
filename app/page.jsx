import Image from "next/image";
import bg from "@/public/wellington_rd.jpg";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="House in the winter with snow"
      />
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="relative text-center">
        <h1 className="mb-10 font-normal tracking-tight text-9xl text-primary-100">
          109 Wellington Rd
        </h1>
        <h1 className="mb-10 font-normal tracking-tight text-8xl text-primary-100">
          Assets Management System
        </h1>
      </div>
    </main>
  );
}
