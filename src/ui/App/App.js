import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/Molecules/Header';

import Home from '../pages/Home';
import RecipeDetail from '../pages/RecipeDetail';

import Ribbon from '../../packages/used-stack/Components/Ribbon/Ribbon';
import Modal from '../../packages/used-stack/Components/Modal/Modal';

import Footer from '../components/Molecules/Footer';

import ProviderCategory from '../components/contexts/ContextCategory';
import ProviderRecipes from '../components/contexts/ContextRecipes';
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
    <div className="App">
      <ProviderCategory>
        <ProviderRecipes>
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
        </ProviderRecipes>
      </ProviderCategory>
    </div>
  );
}

export default App;