import * as React from 'react';
import classNames from 'classnames';

import './SearchBarTLD.scss';

export interface SearchBarTLDProps {
  
}
 
export interface SearchBarTLDState {
  selectIndex: number,
  tldList: string[]
}
 
class SearchBarTLD extends React.Component<SearchBarTLDProps, SearchBarTLDState> {
  state: SearchBarTLDState;
  intervalId: any;
  constructor(props: SearchBarTLDProps) {
    super(props);
    this.state = { 
      selectIndex: 0,
      tldList: [
        '.com',
        '.co.kr',
        '.se',
        '.hs.kr',
        '.me',
        '.xyz',
        '.kr',
        '.dev',
        '.xxx',
        '.rich',
        '.org',
        '.io',
        '.shop',
        '.ga',
        '.gg',
        '.net'
      ]
    };
    this.intervalId = 0;
  }

  changeIndex() {
    const { selectIndex } = this.state;
    if (selectIndex === 14) {
      this.setState({selectIndex: 0});
    } else {
      this.setState({selectIndex: selectIndex + 1});
    }
  }

  renderList = () =>{
    const { selectIndex, tldList } = this.state;
    return tldList.map((tld:string, index:number) => {
      return (
        <span 
          className={
            classNames(
              "SearchBarTLD__tld", {
                "SearchBarTLD__tld--visual": selectIndex === index
              }
            )
          }
          key={tld}
        >
          {tldList[index]}
        </span>
      )
    })
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.changeIndex(), 1500);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  

  render() { 
    return (
      <div className="SearchBarTLD">
        {this.renderList()}
      </div>
    );
  }
}
 
export default SearchBarTLD;