// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options = [
  {
    label: 'Africans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Bengali',
    value: 'bn',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'German',
    value: 'de',
  },
  {
    label: 'Gujarati',
    value: 'gu',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Hebrew',
    value: 'he',
  },
  {
    label: 'Japanese',
    value: 'ja',
  },
  {
    label: 'Malayalam',
    value: 'ml',
  },
  {
    label: 'Marathi',
    value: 'mr',
  },
  {
    label: 'Punjabi',
    value: 'pa',
  },
  {
    label: 'Russian',
    value: 'ru',
  },
  {
    label: 'Sanskrit',
    value: 'sa',
  },
  {
    label: 'Sindhi',
    value: 'sd',
  },
  {
    label: 'Spanish',
    value: 'es',
  },
  {
    label: 'Tamil',
    value: 'ta',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label='select a language'
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h2 className='ui header'>Output</h2>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
