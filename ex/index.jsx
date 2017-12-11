import React from 'react'

import ReactDOM from 'react-dom'

import Search from './components/search'

ReactDOM.render(
    <div>
        <Search inicialValue='Teste jony' />
        {/*<Search value='Outro texto' />*/}
    </div>
, document.getElementById('app'));
