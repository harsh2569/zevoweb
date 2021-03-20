import React from 'react'
import './index.css'

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//importing screens
import { Home, About, Careers, Contactus} from './screens/'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/careers" exact component={Careers} />
                <Route path="/contactus" exact component={Contactus} />
            </Switch>
        </Router>
    )
}

export default App
