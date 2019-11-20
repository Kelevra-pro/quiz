import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
// import classes from './App.module.scss';
import Quiz from "./containers/Quiz/Quiz";

// console.log(classes);

class App extends Component {
    render() {
        return (
            <Layout>
                <Quiz/>
            </Layout>
        )
    }
}

export default App;
