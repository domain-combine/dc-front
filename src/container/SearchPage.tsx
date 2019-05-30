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
	const [SearchResult, setSearchResult] = React.useState<domainInfo[]>([
		{
			tld: 'com',
			origin: 'Gabia',
			minPrice: 10000,
			length: 7
		},
		{
			tld: 'net',
			origin: 'Gabia',
			minPrice: 12000,
			length: 5
		},
		{
			tld: 'info',
			origin: 'HostingKr',
			minPrice: 7000,
			length: 8
		},
		{
			tld: 'me',
			origin: 'BlueHost',
			minPrice: 10000,
			length: 6
		},
		{
			tld: 'name',
			origin: 'Gabia',
			minPrice: 13000,
			length: 5
		}
	]);
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
