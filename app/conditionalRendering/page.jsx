import React from "react";
import Image from "next/image";
import DummyComponent from "../components/ui/DummyComponent";
const Page = () => {
  return (
    <>
      <h1>Conditional Rendering</h1>
      <DummyComponent />

      <div className="relative h-28 aspect-video">
        <Image
          src="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?auto=format&fit=crop&q=80&w=2970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          sizes="(min-width: 500px) 500px, 100px"
          fill
          priority
          placeholder="blur"
        />
      </div>
    </>
  );
};

export default Page;
