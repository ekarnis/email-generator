import React from 'react'
import { Counter } from './features/counter/Counter'
import { Header } from './features/header/Header'

function App () {
  return (
    <div className='App'>
      <Header />
      <div>
        <Counter />
      </div>
    </div>
  )
}

export default App
