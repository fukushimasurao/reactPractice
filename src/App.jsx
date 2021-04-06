import React, { useState } from 'react';
import Booklist from './components/Booklist';

import axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const getDataFromAPI = async keyword => {
    const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
    return await axios.get(`${requestUrl}${keyword}`);
}

const App = () => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(() => e.target.value)
    }
    const languages = ['React', 'Vue', 'Angular', text];
    return (
        <BrowserRouter>
            <div>
                <h1>react app🍣</h1>
                <ul>
                    <li><Link to='/'>React</Link></li>
                    <li><Link to='/vue'>vue</Link></li>
                    <li><Link to='/angular'>Angular</Link></li>
                    <li>
                        <input
                            type='text'
                            class='form-control w-25'
                            placeholder='検索したい本の名前'
                            onChange={handleChange}
                        />
                        <Link to={`/search/${text}`}><button class='btn btn-primary'>検索</button></Link>
                    </li>
                </ul>

                <hr />
                <Route
                    exact path='/'
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
                <Route
                    path={`/search/${text}`}
                    render={
                        props =>
                            <Booklist
                                language={text}
                                getData={keyword => getDataFromAPI(keyword)}
                            />
                    }
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
