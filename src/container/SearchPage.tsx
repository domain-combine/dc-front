import * as React from 'react';
import axios, { AxiosResponse } from 'axios';
import * as H from 'history';
import { withRouter, RouteComponentProps, match } from 'react-router-dom';
import SearchPageBar from '../components/SearchPage/SearchPageBar';
import SearchPageSearchInput from '../components/SearchPage/SearchPageSearchInput';
import SearchPageResultRender from '../components/SearchPage/SearchPageResultRender';
import LodingPopup from '../components/SearchPage/LodingPopup';

import Config from '../core/request/config.json';

import './SearchPage.scss';

interface RouterMatch {
	domain: string;
}

export interface SearchPageProps extends RouteComponentProps<RouterMatch> {}

export interface SearchPageState {
	SearchResult: domainInfo[];
	loding: boolean;
}

interface getDomainInfo {
	tld: string;
	origin: string;
	minPrice: number;
	length: number;
}

class SearchPage extends React.Component<SearchPageProps, SearchPageState> {
	state = {
		SearchResult: [],
		loding: false
	};

	componentDidMount() {
		this.setState({ loding: true });
		axios.get(`${Config.rootURL}/list?domain=${this.props.match.params.domain}`).then((res: AxiosResponse) => {
			const list = res.data;
			const data: domainInfo[] = [];
			list.map((item: getDomainInfo, index: number) => {
				data.push({ ...item, view: true });
			});
			this.setSearchResult(data);
			this.setState({ loding: false });
		});
	}

	setSearchResult(value: domainInfo[]) {
		this.setState({ SearchResult: value });
	}

	changeTLDView(index: number) {
		const SearchResult: domainInfo[] = this.state.SearchResult;
		SearchResult[index].view = !SearchResult[index].view;
		this.setState({ SearchResult });
	}

	render() {
		const { loding } = this.state;
		return (
			<div className="SearchPage" style={{ width: window.screen.width }}>
				{loding ? <LodingPopup /> : null}
				<SearchPageBar
					domainTLDList={this.state.SearchResult}
					changeTLDView={(index: number) => {
						console.log(index);
						this.changeTLDView(index);
					}}
				/>
				<div className="SearchPage__wrapper">
					<SearchPageSearchInput />
					<SearchPageResultRender domainTLDList={this.state.SearchResult} />
				</div>
			</div>
		);
	}
}

export default withRouter(SearchPage);
