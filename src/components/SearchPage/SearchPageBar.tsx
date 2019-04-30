import * as React from 'react';

import { ColorLogo } from '../../assets';

interface SearchPageBarProps {
  tldList: string[]
}

const renderTLDList = (tldList: string[]) => {
  return tldList.map((tld) => {
    return (
      <div className="SearchPageBar__TLDList__item">
        <input type="checkbox" name="tld"/>
      </div>
    )
  })
}

const SearchPageBar = ({tldList}: SearchPageBarProps) => {
  return (
    <div className="SearchPageBar">
      <div className="SearchPageBar__Icon">
        <ColorLogo />
      </div>
      <div className="SearchPageBar__TLDList">
        {}
      </div>
    </div>
  )
}

export default SearchPageBar;