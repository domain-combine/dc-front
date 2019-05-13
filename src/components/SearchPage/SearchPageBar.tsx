import * as React from "react";
import classNames from "classnames";

import tempTLDInfos from "./tempTLDInfos.json";
import { ColorLogo } from "../../assets";

import "./SearchPageBar.scss";

interface SearchPageBarProps {
  tldList: string[];
}

interface tldInfo {
  tld: string;
  lowPrice: number;
}

const renderTLDList = (tldList: tldInfo[]) => {
  return tldList.map((item, index) => {
    return (
      <div className="SearchPageBar__List__item" key={index}>
        <input
          type="checkbox"
          name="tld"
          className="SearchPageBar__List__item__checkbox"
          id={`SearchPageBar__List__item--TLD--${index}`}
        />
        <label htmlFor={`SearchPageBar__List__item--TLD--${index}`}>
          <div className="SearchPageBar__List__item__checkLabel" />
          <div className="SearchPageBar__List__item__textLabel">{item.tld}</div>
          <span className="flex" />
          <div className={`SearchPageBar__List__item__price`}>
            <span>{item.lowPrice}원 ~</span>
          </div>
        </label>
      </div>
    );
  });
};

const renderSellerList = (sellerList: string[]) => {
  return sellerList.map((seller, index) => {
    return (
      <div
        className="SearchPageBar__List__item SearchPageBar__List__item--seller"
        key={index}
      >
        <input
          type="checkbox"
          name="tld"
          className="SearchPageBar__List__item__checkbox"
          id={`SearchPageBar__List__item--seller--${index}`}
        />
        <label htmlFor={`SearchPageBar__List__item--seller--${index}`}>
          <div className="SearchPageBar__List__item__checkLabel" />
          <div className="SearchPageBar__List__item__textLabel">{seller}</div>
        </label>
      </div>
    );
  });
};

const tldInfos: tldInfo[] = tempTLDInfos;

const sellerList: string[] = [
  "gabia",
  "Hostring.kr",
  "GoDaddy",
  "DIRECT Hosting",
  "MailPlug",
  "Bluehost",
  "OnlyDomains",
  "name.com"
];

const SearchPageBar = ({ tldList }: SearchPageBarProps): JSX.Element => {
  const [isTLDListOpen, setIsTLDListOpen] = React.useState(true);
  const [isSellerList, setIsSellerList] = React.useState(true);
  return (
    <div className="SearchPageBar">
      <div className="SearchPageBar__Icon">
        <ColorLogo />
      </div>
      <div
        className="SearchPageBar__ListTitle"
        onClick={() => setIsTLDListOpen(!isTLDListOpen)}
      >
        TLD
        <span
          className={classNames("SearchPageBar__ListTitle__arrow", {
            "SearchPageBar__ListTitle__arrow--open": isTLDListOpen
          })}
        />
      </div>
      {isTLDListOpen ? (
        <div className="SearchPageBar__List SearchPageBar__List--TLDList">
          {renderTLDList(tldInfos)}
        </div>
      ) : null}
      <div
        className="SearchPageBar__ListTitle"
        onClick={() => setIsSellerList(!isSellerList)}
      >
        도메인 판매처
        <span
          className={classNames("SearchPageBar__ListTitle__arrow", {
            "SearchPageBar__ListTitle__arrow--open": isSellerList
          })}
        />
      </div>
      {isSellerList ? (
        <div className="SearchPageBar__List SearchPageBar__List--seller">
          {renderSellerList(sellerList)}
        </div>
      ) : null}
    </div>
  );
};

export default SearchPageBar;
