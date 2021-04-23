import './App.css';
import { Header } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Economy from './components/pages/Economy/Economy';
import People from './components/pages/People/People';
import CleanEnergy from './components/pages/CleanEnergy/CleanEnergy';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
            <Router className="items">
                <ScrollToTop />
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/economy" exact component={Economy} />
                    <Route path="/people" exact component={People} />
                    <Route path="/cleanenergy" exact component={CleanEnergy} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
