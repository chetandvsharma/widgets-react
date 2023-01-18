import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Counter from './exercise/OneE';
import TwoE from './exercise/TwoE';
import Route from './routes/routes';
import Header from './components/Header';

const options = [
  {
    label: 'Laal',
    value: 'red',
  },
  {
    label: 'Nilaa',
    value: 'blue',
  },
  {
    label: 'Pilaa',
    value: 'yellow',
  },
  {
    label: 'Gulmbi',
    value: 'pink',
  },
  {
    label: 'Harra',
    value: 'green',
  },
];

const items = [
  {
    title: 'What is ReactJS ?',
    content: 'ReactJS is a Js Library.',
  },
  {
    title: 'What is NodeJS ?',
    content: 'nodeJs is js run time enviornment.',
  },
  {
    title: 'What is MERN stack ?',
    content: 'MongoDB Express ReactJS NodeJS',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/search'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <div>
          <button onClick={() => setShowDropdown(!showDropdown)}>
            Toogle Dropdown
          </button>
          {showDropdown ? (
            <Dropdown
              label='select a color'
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
            />
          ) : null}
        </div>
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      <Route path='/test-1'>
        <Counter />
      </Route>
      <Route path='/test-2'>
        <TwoE />
      </Route>
    </div>
  );
};
export default App;
