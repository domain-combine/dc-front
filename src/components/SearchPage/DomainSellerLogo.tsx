import * as React from 'react';
import * as sellerLogo from '../../assets/sellerLogo/sellerLogo';

import './DomainSellerLogo.scss';

interface DomainSellerLogoProps {
	origin: string;
}

function getLogo(origin: string) {
	switch (origin) {
		case 'Gabia':
			return <sellerLogo.Gabia className="DomainSellerLogo__Logo" />;
		case 'GoDaddy':
			return <sellerLogo.GoDaddy className="DomainSellerLogo__Logo" />;
		case 'BlueHost':
			return <sellerLogo.BlueHost className="DomainSellerLogo__Logo" />;
		case 'DirectHosting':
			return <sellerLogo.DirectHosting className="DomainSellerLogo__Logo" />;
		case 'NameDotCom':
			return <sellerLogo.NameDotCom className="DomainSellerLogo__Logo" />;
		case 'HostingKr':
			return <sellerLogo.HostingKr className="DomainSellerLogo__Logo" />;
		case 'MailPlug':
			return <sellerLogo.MailPlug className="DomainSellerLogo__Logo" />;
		case 'OnlyDomains':
			return <sellerLogo.OnlyDomains className="DomainSellerLogo__Logo" />;
		default:
			return <div>로고 없음</div>;
	}
}

const DomainSellerLogo = ({ origin }: DomainSellerLogoProps) => (
	<div className="DomainSellerLogo">{getLogo(origin)}</div>
);

export default DomainSellerLogo;
