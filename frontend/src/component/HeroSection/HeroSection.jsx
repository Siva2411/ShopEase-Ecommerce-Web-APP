import React from "react";
import HeroImg from "../../assets/img/hero-img.png";

function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-start bg-cover bg-center h-svh w-full"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute flex inset-0 bg-black/40"></div>
      <main className="relative z-10 px-20 lg:px-24">
        <h2 className="text-3xl text-white">T-shirt/ Tops</h2>
        <p className="mt-3 text-white text-6xl">Summer Value Pack</p>
        <p className="mt-2 text-2xl text-white">Cool / Colorful / Comfy</p>
        <button className="border rounded mt-6 text-white bg-black border-black hover:bg-white hover:text-black hover:border-white transition duration-150 w-32 h-10 cursor-pointer text-[18px] font-bold">Shop Now</button>
      </main>
    </section>
  );
}

export default HeroSection;
