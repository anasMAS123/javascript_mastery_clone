import React from "react";
interface props {
  title: string;
  query: string;
  category: string;
}
const Header = ({ title, query, category }: props) => {
  if (query && category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        search results for "{query}" in{" "}
        <span className=" capitalize">{category}</span>
      </h1>
    );
  }
  if (query) {
    return (
      <h1 className="heading3 self-start text-white-800">
        search results for "{query}"
      </h1>
    );
  }
  if (category) {
    return (
      <h1 className="heading3 self-start text-white-800">
        search results for {category}
      </h1>
    );
  }
  return (
    <h1 className="heading3 self-start text-white-800">no results found</h1>
  );
};

export default Header;
