import * as React from 'react';
import { withRouter, RouteComponentProps, match } from 'react-router-dom';
import SearchPageResult from './SearchPageResult';

import './SearchPageResultRender.scss';

interface SearchPageResultRenderProps extends RouteComponentProps {
	domainTLDList: domainInfo[];
	match: match<RouterMatch>;
}

interface RouterMatch {
	domain: string;
}

function renderResult(domainName: string, domainTLDList: domainInfo[]) {
	return domainTLDList.map(result => {
		return <SearchPageResult domainName={domainName} domainInfo={result} />;
	});
}

const SearchPageResultRender = ({ match, domainTLDList }: SearchPageResultRenderProps) => {
	return (
		<div className="SearchPageResultRender">
			<div className="SearchPageResultRender__title">SEARCH RESULT</div>
			{renderResult(match.params.domain, domainTLDList)}
		</div>
	);
};

export default withRouter(SearchPageResultRender);
