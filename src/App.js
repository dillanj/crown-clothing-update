import { Routes, Route } from 'react-router-dom'

import Home from "./routes/home/home.component";
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path='/auth' element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
