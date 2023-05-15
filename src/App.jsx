import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import CoffeeCard from './components/CoffeeCard';

const App = () => {
  const loadedCoffee = useLoaderData();
  const [allCoffee, setAllCoffee] = useState(loadedCoffee)
  console.log(loadedCoffee);
  
  return (
    <div>
      <h1 className='text-6xl text-purple-600 text-center py-5'>Coffee {allCoffee.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto gap-5'>
        {
          allCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} allCoffee={allCoffee} setAllCoffee={setAllCoffee}></CoffeeCard>)
        }
      </div>
    </div>
  );
};

export default App;