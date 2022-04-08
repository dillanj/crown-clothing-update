import { Routes, Route } from 'react-router-dom'

import Home from "./routes/home/home.component";
import NavigationBar from './components/navigation-bar/navigation-bar.component';

const App = () => {
 
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        {/* <Route path=''></Route> */}
      </Route>
    </Routes>
  );
};

export default App;
