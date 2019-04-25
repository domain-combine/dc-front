import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames';
import SearchBarTLD from './SearchBarTLD';

import './MainSearchBar.scss';

interface MainSearchBarProps extends RouteComponentProps<any>{
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const MainSearchBar = ({history, location, match}:MainSearchBarProps) => {
  const [ searchDomain, setDomain ] = useState<string>('');

  return (
    <div className="MainSearchBar">
      <form
        className="MainSearchBar__InputBox"
        onSubmit={(e:any) => {
          e.preventDefault();
          history.push(`/search/${searchDomain}`);
        }
      }>
        <span className="MainSearchBar__InputBox__title">www.</span>
        <input 
          type="text"
          className="MainSearchBar__InputBox__input"
          value={searchDomain}
          placeholder="구매하고 싶은 도메인을 입력하세요"
          onChange={(e:InputEvent) => setDomain(e.target.value)}
        />
        <SearchBarTLD />
      </form>
    </div>
  )
}

export default withRouter(MainSearchBar);