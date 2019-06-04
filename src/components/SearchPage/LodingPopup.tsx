import * as React from 'react';
import { withRouter, RouteComponentProps, match } from 'react-router-dom';
import Lottie from 'react-lottie';
import { lodingAnimation } from '../../assets';

import './LodingPopup.scss';

interface LodingPopupProps extends RouteComponentProps {
	match: match<RouterMatch>;
}

interface RouterMatch {
	domain: string;
}

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: lodingAnimation
};

const LodingPopup = ({ match }: LodingPopupProps) => (
	<div className="LodingPopup">
		<div className="LodingPopup__contents">
			<h1>잠시만 기다려주세요!</h1>
			<Lottie options={defaultOptions} height={400} width={400} />
			<div className="LodingPopup__contents__msg">
				<span>{match.params.domain}</span>과 관련된 도메인을 열심히 찾고 있는 중입니다!<br />
			</div>
		</div>
	</div>
);

export default withRouter(LodingPopup);
