import * as React from 'react';
import DomainSellerLogo from './DomainSellerLogo';

import './SearchPageResult.scss';

interface SearchPageResultProps {
	domainName: string;
	domainInfo: domainInfo;
}

const SearchPageResult = ({ domainName, domainInfo }: SearchPageResultProps) => {
	const { tld, origin, minPrice, length } = domainInfo;
	if (!domainInfo.view) {
		return null;
	}

	function copyToClipboard(val: string) {
		var t = document.createElement('textarea');
		document.body.appendChild(t);
		t.value = val;
		t.select();
		document.execCommand('copy');
		document.body.removeChild(t);
	}

	return (
		<div className="SearchPageResult">
			<DomainSellerLogo origin={origin} />
			<div className="SearchPageResult__domainName">{`${domainName}.${tld}`}</div>
			<div className="flex" />
			<div
				className="SearchPageResult__PriceInfo"
				onClick={() => {
					copyToClipboard(`${domainName}.${tld}`);
					alert('도메인 이름을 클립보드에 복사하였습니다. 페이지 이동 후 붙여넣어주세요.');
					window.open(domainInfo.origin);
				}}
			>
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
