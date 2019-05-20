import * as React from 'react';
import { withRouter, RouteComponentProps, match } from 'react-router-dom';
import SearchPageBar from '../components/SearchPage/SearchPageBar';
import SearchPageSearchInput from '../components/SearchPage/SearchPageSearchInput';
import SearchPageResultRender from '../components/SearchPage/SearchPageResultRender';

import './SearchPage.scss';

interface SearchPageProps extends RouteComponentProps {
	match: match<RouterMatch>;
}

interface RouterMatch {
	domain: string;
}

const SearchPage = ({ match }: SearchPageProps) => {
	const [SearchResult, setSearchResult] = React.useState([]);
	React.useEffect(() => {});

	return (
		<div className="SearchPage" style={{ width: window.screen.width }}>
			<SearchPageBar tldList={['']} />
			<div className="SearchPage__wrapper">
				<SearchPageSearchInput />
				<SearchPageResultRender domainTLDList={SearchResult} />
			</div>
		</div>
	);
};

export default withRouter(SearchPage);
