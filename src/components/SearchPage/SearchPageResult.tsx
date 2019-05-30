import * as React from 'react';
import DomainSellerLogo from './DomainSellerLogo';

import './SearchPageResult.scss';

interface SearchPageResultProps {
	domainName: string;
	domainInfo: domainInfo;
}

const SearchPageResult = ({ domainName, domainInfo }: SearchPageResultProps) => {
	const { tld, origin, minPrice, length } = domainInfo;
	return (
		<div className="SearchPageResult">
			<DomainSellerLogo origin={origin} />
			<div className="SearchPageResult__domainName">{`${domainName}.${tld}`}</div>
			<div className="flex" />
			<div className="SearchPageResult__PriceInfo">
				<div className="SearchPageResult__PriceInfo__wrapper">
					총 {length}개 사이트 중 최저가
					<div className="SearchPageResult__PriceInfo__wrapper__price">
						￦ {minPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchPageResult;
