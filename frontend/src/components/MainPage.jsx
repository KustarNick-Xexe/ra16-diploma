import React from 'react'
import Catalog from './Catalog'
import TopSales from './TopSales'

function MainPage() {
    return (
        <React.Fragment>
            <TopSales />
            <Catalog toggle={true} />
        </React.Fragment>
    )
}

export default MainPage

