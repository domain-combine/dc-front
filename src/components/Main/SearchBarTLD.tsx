import * as React from 'react';
import classNames from 'classnames';

import './SearchBarTLD.scss';

const tldList:string[] = [
  '.com',
  '.co.kr',
  '.se',
  '.me',
  '.xyz',
  '.kr',
  '.dev',
  '.xxx',
  '.rich',
  '.org',
  '.io',
  '.shop',
  '.ga',
  '.gg',
  '.net'
];

const SearchBarTLD = () => {
  const [ selectIndex, setSelectIndex ] = React.useState(0);

  const changeIndex = () => {
    if (selectIndex === 14) {
      setSelectIndex(0)
    } else {
      setSelectIndex(selectIndex + 1)
    }
  }
  React.useLayoutEffect(() => {
    const interval = setInterval(() => changeIndex(), 1500);

    return () => {
      clearInterval(interval)
    }
  })
  const renderList = () =>{
    return tldList.map((tld:string, index:number) => {
      return (
        <span 
          className={
            classNames(
              "SearchBarTLD__tld", {
                "SearchBarTLD__tld--visual": selectIndex === index
              }
            )
          }
          key={tld}
        >
          {tldList[index]}
        </span>
      )
    })
  }

  return (
    <div className="SearchBarTLD">
      {renderList()}
    </div>
  )
}

export default SearchBarTLD;