import { Routes, Route } from 'react-router-dom'

import Home from "./routes/home/home.component";
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import SignIn from './routes/sign-in/sign-in.component';

const App = () => {
 
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />}></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
