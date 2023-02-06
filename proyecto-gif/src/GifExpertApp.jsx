import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku", "Naruto"]);
  const onAddCategory = (newCategory) => {
    setCategories([...categories, newCategory])
  };
  return (
    <>
      <h1>Hola cara cola</h1>
      {/* Input */}
      <AddCategory 
      // setCategories={ setCategories }
      onNewCategory={value => onAddCategory(value)}
      />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
