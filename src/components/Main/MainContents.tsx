import React from 'react';

import { MainBackGround1, MainBackGround2, MainBackGround3, WhiteLogo } from '../../assets';

import MainBackGround from './MainBackGround';
import './MainContents.scss';
 
interface contentsData {
  imageSrc: string;
  contents: string
};

export interface MainContentsProps {
  
}

export interface MainContentsState {
  pageIndex: number;
  contentsData: contentsData[];
}
 
class MainContents extends React.Component<MainContentsProps, MainContentsState> {
  state: MainContentsState;
  intervalId: any;
  constructor(props: MainContentsProps) {
    super(props);
    this.state = {
      pageIndex: 2,
      contentsData: [
        {
          imageSrc: MainBackGround1,
          contents: `전세계 약 12억4천만 개의 웹사이트 중에서\n당신의 서비스를 돋보이세요.`
        },
        {
          imageSrc: MainBackGround2,
          contents: `서비스를 돋보일 수 있는 도메인,\n도메인컴바인으로 최저가 구매하세요`
        },
        {
          imageSrc: MainBackGround3,
          contents: `8개의 도메인 등록기관을 비교하여\n최저가의 도메인을 살 수 있습니다.`
        },
      ]
    }
    this.intervalId = 0;
  }

  componentDidMount() {
    const setIndex = () => {
      let { pageIndex } = this.state;
      if (pageIndex === 2) {
        this.setState({pageIndex: 0})
      } else {
        this.setState({pageIndex: pageIndex + 1})
      }
    }
    this.intervalId = setInterval(setIndex, 6000);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  
  renderBackGround (): JSX.Element[] {
    const { contentsData, pageIndex } = this.state;
    return contentsData.map((contents:contentsData, index: number) => (
      <MainBackGround key={index} contentsData={contents} index={index} pageIndex={pageIndex} length={contentsData.length}/>
    ))
  }

  render() {
    const { pageIndex, contentsData } = this.state;
    return (
      <div className="MainContents">
        <div className="MainContents__Logo">
          <WhiteLogo />
        </div>
        {this.renderBackGround()}
      </div>
    );
  }
}
 
export default MainContents;