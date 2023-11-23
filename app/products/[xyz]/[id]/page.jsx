import Image from "next/image";
import React from "react";
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
    return <div>{JSON.stringify(data, null)}
    <Image src={data.image} alt="abbc" width={100} height={100} />
    </div>;
};

export default Page;
