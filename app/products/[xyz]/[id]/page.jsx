import Image from "next/image";
import React from "react";
import { AddtoCartContextProvider } from "@/app/context/cartContext";
import AddToCartBtn from "@/app/components/ui/AddToCartBtn";
import Button from "@/app/components/ui/Button";
import Cart from "@/app/components/ui/Cart";

async function getData(id) {
  const product = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!product.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return product.json();
}

const Page = async ({ params }) => {
  console.log(params)
  const data = await getData(params?.id);
  return (
    <div>
      {JSON.stringify(data, null)}
      <Image src={data.image} alt="abbc" width={100} height={100} />
      
      <AddtoCartContextProvider>
        <AddToCartBtn />
        <Cart/>
      </AddtoCartContextProvider>
      
    </div>
  );
};

export default Page;
