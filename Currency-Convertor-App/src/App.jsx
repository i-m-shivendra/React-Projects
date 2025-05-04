import { useState } from 'react'
import Header from './Components/Header'
import Convertor from './Components/Convertor'

function App() {
  

  return (
    <div className='container p-4 mt-5 border rounded shadow background white'>
      <Header title='Currency Converter' />
      <Convertor />
    </div>
  );
}

export default App;
    