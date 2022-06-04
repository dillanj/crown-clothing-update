import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";
import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);
  // const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
