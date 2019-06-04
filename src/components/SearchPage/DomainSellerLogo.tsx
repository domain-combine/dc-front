import * as React from 'react';
import * as sellerLogo from '../../assets/sellerLogo/sellerLogo';

import './DomainSellerLogo.scss';

interface DomainSellerLogoProps {
	origin: string;
}

function getLogo(origin: string) {
	switch (origin) {
		case 'https://www.gabia.com':
			return <sellerLogo.Gabia className="DomainSellerLogo__Logo" />;
		case 'https://godaddy.com/':
			return <sellerLogo.GoDaddy className="DomainSellerLogo__Logo" />;
		case 'https://www.bluehost.com/domains':
			return <sellerLogo.BlueHost className="DomainSellerLogo__Logo" />;
		case 'https://www.direct.co.kr':
			return <sellerLogo.DirectHosting className="DomainSellerLogo__Logo" />;
		case 'https://www.name.com/':
			return <sellerLogo.NameDotCom className="DomainSellerLogo__Logo" />;
		case 'https://www.hosting.kr':
			return <sellerLogo.HostingKr className="DomainSellerLogo__Logo" />;
		case 'https://www.mailplug.com':
			return <sellerLogo.MailPlug className="DomainSellerLogo__Logo" />;
		case 'https://www.onlydomains.com':
			return <sellerLogo.OnlyDomains className="DomainSellerLogo__Logo" />;
		default:
			return <div>로고 없음</div>;
	}
}

const DomainSellerLogo = ({ origin }: DomainSellerLogoProps) => (
	<div className="DomainSellerLogo">{getLogo(origin)}</div>
);

export default DomainSellerLogo;
