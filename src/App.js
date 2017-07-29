import React from 'react';
import { render } from 'react-dom';
import css from './style.scss';

class Test extends React.Component {
    render () {
        return(
            <h1>It Works</h1>
        )
    }
}

render(<Test />, document.querySelector('#app'))
