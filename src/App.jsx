import React from 'react';
import Booklist from './components/Booklist';
import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
}

const App = () => {
    const languages = ['React', 'Vue', 'Angular'];
    return (
        <BrowserRouter>
            <div>
                <h1>react app</h1>
                <ul>
                    <li><Link to='/'>React</Link></li>
                    <li><Link to='/vue'>vue</Link></li>
                    <li><Link to='/angular'>Angular</Link></li>
                    <input type="textarea" vaue="" />
                </ul>
                <Route
                    exact
                    path='/'
                    render={
                        props => <Booklist
                            language={languages[0]}
                            getData={keyword => getDataFromAPI(keyword)}
                        />
                    }
                />
                <Route
                    path='/vue'
                    render={
                        props =>
                            <Booklist
                                language={languages[1]}
                                getData={keyword => getDataFromAPI(keyword)}
                            />
                    }
                />
                <Route
                    path='/angular'
                    render={
                        props =>
                            <Booklist
                                language={languages[2]}
                                getData={keyword => getDataFromAPI(keyword)}
                            />
                    }
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
