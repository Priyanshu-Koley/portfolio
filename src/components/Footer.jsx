import * as React from 'react';
import './Footer.css';
export default class Nav extends React.Component 
{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            < >
                <div className='footer'>
                &#169;2023-Priyanshu Koley | All rights reserved
                </div>
            </>
        );
    }
}