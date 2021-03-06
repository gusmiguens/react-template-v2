import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { login, logout } from './actions/auth'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { firebase } from './firebase/firebase'
import 'normalize.css/normalize.css'
import '../src/styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import LoadingPage from './components/LoadingPage'

const store = configureStore()
let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        renderApp()
        if (history.location.pathname === '/') {
            history.push('/dashboard')
        }
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})