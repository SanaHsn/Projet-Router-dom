import React from 'react';
import { useState, useEffect } from 'react';

import '../App.css'

function Navbar() {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className='navbar'>
            <nav  className={theme== 'dark'? 'nav2' : 'nav'}>
                <div className='titre'>
                    <h1>Where in the word?</h1>
                </div>
                <div className=''>
                    <button onClick={toggleTheme} className='darkmode'>Dark mode</button>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;