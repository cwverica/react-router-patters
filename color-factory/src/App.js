import { Redirect, Route, Switch } from 'react-router-dom';
import ColorAdd from './ColorAdd';
import ColorDisplay from './ColorDisplay';
import ColorList from './ColorList';

import './App.css';

function App() {

  const getColors = () => JSON.parse(localStorage.getItem('colorFactory-colors'));
  const setColors = (colors) => localStorage.setItem('colorFactory-colors', JSON.stringify(colors));

  return (
    <div className="App">
      <Switch >
        <Route exact path='/colors/new'>
          <ColorAdd getColors={getColors} setColors={setColors} />
        </Route>
        <Route exact path='/colors/:color'>
          <ColorDisplay getColors={getColors} />
        </Route>
        <Route exact path='/colors'>
          <ColorList getColors={getColors} />
        </Route>
        <Redirect to='/colors' />
      </Switch>
    </div>
  );
}

export default App;
