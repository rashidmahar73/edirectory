import './App.css';
import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { SignUp } from './Components/SIgnUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return <Dashboard/>
  // return (
  //   <div className="App">
  //  {/* <Button type="primary"><Link to="/GenreIds">Primary Button</Link></Button> */}
  //   </div>
  // );
}

export default App;
