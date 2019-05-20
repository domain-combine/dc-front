import * as React from "react";
import SearchPageBar from "../components/SearchPage/SearchPageBar";
import SearchPageSearchInput from "../components/SearchPage/SearchPageSearchInput";

import "./SearchPage.scss";

interface SearchPageProps {}

const SearchPage = ({  }: SearchPageProps) => {
  return (
    <div className="SearchPage" style={{ width: window.screen.width }}>
      <SearchPageBar tldList={[""]} />
      <SearchPageSearchInput />
    </div>
  );
};

export default SearchPage;
