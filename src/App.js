import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';
const options = [
  {
    label: 'Red',
    value: 'red',
  },
  {
    label: 'Blue',
    value: 'blue',
  },
  {
    label: 'Yellow',
    value: 'yellow',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};
export default App;
// const items = [
//   {
//     title: 'What is ReactJS ?',
//     content: 'ReactJS is a Js Library.',
//   },
//   {
//     title: 'What is NodeJS ?',
//     content: 'nodeJs is js run time enviornment.',
//   },
//   {
//     title: 'What is MERN stack ?',
//     content: 'MongoDB Express ReactJS NodeJS',
//   },
// ];

// export default () => {
//   return <Search />;
// };
// export default () => {
//   return <Accordion items={items} />;
// };

// Exercise One (increase counter using state)
// import Counter from './exercise/OneE';
// export default () => {
//   return <Counter />;
// };
