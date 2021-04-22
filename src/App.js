import './App.css';
import { Header } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
