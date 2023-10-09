import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GeneralRouter } from '../../GeneralRouter'


export const Pages = () => {
    return (
        <>
          <Router>
            <GeneralRouter />
          </Router>
        </>
    )
}