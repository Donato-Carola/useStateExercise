import Card from './components/Card/Cards';
import Title from './components/Title/Title';
import ButtonDeleteAll from './components/ButtonDeleteAll/ButtonDeleteAll';
import ButtonReload from './components/ButtonReload/ButtonReload';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [people, setPeople] = useState(data);  // Stato per i dati




  return (
    <>
      <Title />
      <Card people={people} setPeople={setPeople} />

      <div className='text-white flex sm:container sm:m-auto justify-between'>
        <ButtonReload onClick={() => setPeople(data)}/> 
        <ButtonDeleteAll onClick={() => setPeople([])}/>

      </div>


    </>
  )
}

export default App
