import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const App = () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
export default App;
// // Dropdown
// const options = [
//   {
//     label: 'Laal',
//     value: 'red',
//   },
//   {
//     label: 'Nilaa',
//     value: 'blue',
//   },
//   {
//     label: 'Pilaa',
//     value: 'yellow',
//   },
//   {
//     label: 'Gulmbi',
//     value: 'pink',
//   },
//   {
//     label: 'Harra',
//     value: 'green',
//   },
// ];

// const App = () => {
//   const [selected, setSelected] = useState(options[0]);
//   const [showDropdown, setShowDropdown] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShowDropdown(!showDropdown)}>
//         Toogle Dropdown
//       </button>
//       {showDropdown ? (
//         <Dropdown
//           label = 'select a color';
//           options={options}
//           selected={selected}
//           onSelectedChange={setSelected}
//         />
//       ) : null}
//     </div>
//   );
// };
// export default App;

// // Accordion
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

// // Search (wiki)
// export default () => {
//   return <Search />;
// };
// export default () => {
//   return <Accordion items={items} />;
// };

// // Exercise One (increase counter using state)
// import Counter from './exercise/OneE';
// export default () => {
//   return <Counter />;
// };
