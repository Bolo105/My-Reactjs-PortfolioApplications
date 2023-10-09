import React from 'react'
import { Home } from './Home'
import { Popular } from './Popular'
import { Authors } from './Authors'
import { Temathics } from './Temathics'

export const HomeBase = () => {
  return (
    <div>
       <Home />
       <Popular />
       <Authors />
       <Temathics />
    </div>
  )
}
