import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Zoology from './Zoology'
import Biology from './Biology'

export default class App extends React.Component{
    render() {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var today = new Date();
        var dd = today.getDate();
        var mm = month[today.getMonth()]; //January is 0!
        const today_ms = today.getTime();
        const pathname = window.location.pathname
        return (
            <div>
                <Switch>
                    <Route 
                        path="/biology" 
                        render={(props) => <Biology {...props} mm={mm} dd={dd} month={month} todayMS={today_ms}/>}
                    />
                    <Route
                        path='/zoology'
                        render={(props) => <Zoology {...props} mm={mm} dd={dd} month={month} todayMS={today_ms}/>}
                    />
                </Switch>

                {pathname === '/'&& 
                    <div>
                        <Link to="/biology" className='link'>Biology</Link>
                        <Link to="/zoology" className='link'>Zoology</Link>
                    </div>
                    }
            </div>
        )
    }
}