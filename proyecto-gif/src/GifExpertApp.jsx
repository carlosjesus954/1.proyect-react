import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  };
  return (
    <>
      <h1>Elige tu anime papu</h1>
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory={(value) => onAddCategory(value)}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
