import React from 'react';
import {
  Link,
  Route
} from "react-router-dom";

const TestComp = (props) => {
  return (
    <div>
      test success
      <Link to="/">home</Link>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Route path="/about"><div>about <Link to="/">home</Link></div></Route>
      <Route path="/today"><TestComp/></Route>
      <Route exact path="/">
        <div>
          Tim's personal website
          <Link to="/today">testing</Link>
          <Link to="/about">about</Link>
        </div>
      </Route>
      
    </div>
  );
}

export default App;
