import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import FontFaceObserver from 'fontfaceobserver';
import classNames from 'classnames';

import Main from './container/Main';
import SearchPage from './container/SearchPage';

import './App.scss';
import './assets/font/index.scss';

export interface Props {
  
}
 
export interface State {
  fontLoad: boolean;
}
 
const history = createBrowserHistory();

class App extends React.Component<Props, State> {
  state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      fontLoad: false,
    };
  }

  componentDidMount() {
    const font = new FontFaceObserver('NotoSansCJKkr');
    font.load(null, 10000).then(() => {
      console.log('font load')
      this.setState({fontLoad: true});
    })
  }

  render() { 
    return (
      <div className={classNames(
        'App', {
          'App--load': this.state.fontLoad
        }
      )}>
        <Router history={history}>
          <Switch>
            <Route path="/" component={Main} exact/>
            <Route path="/search/:domain" component={SearchPage} exact/>
          </Switch>
        </Router>
      </div>
    );
  }
}
 
export default App;