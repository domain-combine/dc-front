import React from 'react';
import classNames from 'classnames';

import { WhiteLogo } from '../../assets';

import './MainBackGround.scss';

export interface MainBackGroundProps {
  key: number,
  contentsData: contentsData,
  index: number,
  pageIndex: number,
  length: number
};

export interface contentsData {
  imageSrc: string;
  contents: string
};

const MainBackGround = ({contentsData, index, pageIndex, length}:MainBackGroundProps) => {
  const isSame = index===pageIndex;
  return (
    <div
      className={
        classNames('MainBackGround', {
          'MainBackGround--select': index===pageIndex,
          'MainBackGround--before': (index === pageIndex - 1) || (pageIndex === 0 && index === length-1)
        })
      } style={{backgroundImage:`url(${contentsData.imageSrc})`}}>
      <div className="MainBackGround__Msg">
          {contentsData.contents}
      </div>
    </div>
  )
}

export default MainBackGround;