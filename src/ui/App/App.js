import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/Molecules/Header';

import Home from '../pages/Home';
import RecipeDetail from '../pages/RecipeDetail';

import Ribbon from '../../packages/used-stack/Components/Ribbon/Ribbon';
import Modal from '../../packages/used-stack/Components/Modal/Modal';

import Footer from '../components/Molecules/Footer';

import ProviderListRecipes from '../components/contexts/ContextListRecipes';
import ProviderDetailRecipes from '../components/contexts/ContextDetailRecipe';

import './styles/app.css';

function App() {
  const [modal, setModal] = useState({
    isOpen: false
  });

  const handleIsOpenModal = value => {
    setModal({ isOpen: value });
  };

  const handleCloseModal = () => {
    setModal({ isOpen: false });
  };

  return (
    <ProviderListRecipes>
      <div className="App">
        <ProviderDetailRecipes>
          <Router>
            <Header className="main-header" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/recipe/:id" component={RecipeDetail} />
            </Switch>
            <Footer />
          </Router>
          <Ribbon text="Used stack" onChange={handleIsOpenModal} />
          {modal.isOpen && <Modal onClose={handleCloseModal} />}
        </ProviderDetailRecipes>
      </div>
    </ProviderListRecipes>
  );
}

export default App;
