import React, { useState , useEffect } from "react";
import NavigationItem, { NavItemType } from "./NavigationItem";
import { getCategories } from "data/navigation";


function Navigation() {
  const [categoryList, setCategoryList] = useState<NavItemType[]>([]);

  const fetchCategoryList = async () => {
    try {
      const categories = await getCategories();
      setCategoryList(categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategoryList();
  }, []);

  return (
    <ul className="nc-Navigation flex items-center">
      {categoryList.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
