import * as React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './home';
import About from './about'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/friends' component={Friends} />
    </Switch>
  </BrowserRouter>
)



const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
)

export default App