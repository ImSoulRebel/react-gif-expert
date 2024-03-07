import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (value) => {
    // setCategories((cat) => [...categories, "valorant"]);
    if (categories.includes(value)) return;
    setCategories([...categories, value]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif item */}
    </>
  );
};
