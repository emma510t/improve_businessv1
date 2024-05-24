"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseclient";
import { ProductCard } from "./ui/product-card";

export default function ProductCardSection({
  parentCategory,
  cardVariant,
  desc,
  slugIcon,
}) {
  const [productCards, setProductCards] = useState([]);

  useEffect(() => {
    getProductCards(parentCategory);
  }, [parentCategory]);

  async function getProductCards(parent) {
    const { data } = await supabase
      .from("ib-product-cards")
      .select("*")
      .eq("parent", parent);

    setProductCards(data);
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-4 lg:gap-5 pt-[46px]">
        {productCards
          .filter((productCard) => productCard.icon !== slugIcon)
          .sort((a, b) => a.id - b.id)
          .map((productCard) => {
            return (
              <ProductCard
                key={productCard.url}
                heading={productCard.title}
                icon={productCard.icon}
                url={productCard.url}
                variant={cardVariant}
                {...(desc && { desc: productCard.desc })}
              ></ProductCard>
            );
          })}
      </div>
    </>
  );
}
