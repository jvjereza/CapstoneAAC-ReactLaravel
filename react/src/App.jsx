import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './ClientPage/HomePage';
import AboutPage from './ClientPage/AboutPage';
import MaterialsPage from './ClientPage/MaterialsPage';
import ProductionTeamPage from './ClientPage/ProductionTeamPage';
import ProjectPage from './ClientPage/ProjectPage';
import SignInPage from './ClientPage/LoginSignUpSection';
import PaymentPage from './ClientPage/PaymentPage';
import { Container } from 'react-bootstrap';
import './App.css';
import './index.css';

function App() {
return (
<Router>
<div className="App">
<Navbar />
<Header />
<Container>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/payment" element={<PaymentPage />} />
<Route path="/materials" element={<MaterialsPage />} />
<Route path="/productionteam" element={<ProductionTeamPage />} />
<Route path="/project" element={<ProjectPage />} />
<Route path="/signin" element={<SignInPage />} />
</Routes>
</Container>
<Footer />
</div>
</Router>
);
}

export default App;