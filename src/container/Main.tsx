import React from "react";

import MainContents from "./../components/Main/MainContents";
import MainSearchBar from "../components/Main/MainSearchBar";

export interface MainProps {}

const Main: React.SFC<MainProps> = () => {
  React.useEffect(() => {
    window.document.title = `Domain Combine`;
  }, []);
  return (
    <div className="Main">
      <MainContents />
      <MainSearchBar />
    </div>
  );
};

export default Main;
