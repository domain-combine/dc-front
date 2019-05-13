import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { SearchIcon } from "../../assets";

import "./SearchPageSearchInput.scss";

interface MainSearchBarProps extends RouteComponentProps<any> {}

const SearchPageSearchInput = ({
  history,
  location,
  match
}: MainSearchBarProps): JSX.Element => {
  const [searchDomain, setDomain] = React.useState<string>("");

  return (
    <div className="SearchPageSearchInput">
      <form
        className="SearchPageSearchInput__form"
        onSubmit={(e: any): void => {
          e.preventDefault();
          if (searchDomain !== "") {
            history.push(`/search/${searchDomain}`);
          }
        }}
      >
        <span className="SearchPageSearchInput__form__Icon">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="SearchPageSearchInput__form__input"
          value={searchDomain}
          onChange={(e: InputEvent) => setDomain(e.target.value)}
          placeholder="Search Domain"
        />
      </form>
    </div>
  );
};

export default withRouter(SearchPageSearchInput);
