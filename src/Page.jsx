import React from 'react';

import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import History from './Histoy.jsx'
import Contents from './Contents.jsx';

export default function Page() {

    return (

        <React.Fragment>
            <NavBar />
            <Contents />
            <Footer />
        </React.Fragment>
    )
}