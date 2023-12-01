import AllActors from './Pages/AllActors';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import IndividualActor from './Pages/IndividualActor';
import React from 'react';
import Footer from './components/Footer';
import { GlobalStyles } from './GlobalStyles';

function App(): JSX.Element {

  return (
    <>
        <GlobalStyles />
        <BrowserRouter>
        <Routes>
            <Route  path='/' element={<AllActors />}>
            </Route>
            <Route path='/actor/:actorId' element={<IndividualActor />}>
            </Route>
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
