import * as React from 'react';
import SearchPageBar from '../components/SearchPage/SearchPageBar';

interface SearchPageProps {

}

const SearchPage = ({}:SearchPageProps) => {
  return (
    <div className="SearchPage">
      <SearchPageBar tldList={['']}/>
    </div>
  )
}

export default SearchPage;