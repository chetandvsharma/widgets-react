import React, { useEffect, useState, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const [colour, setColour] = useState('black');
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        onClick={() => {
          onSelectedChange(option);
          // setColour(option.value);
        }}
        className='item'
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label' style={{ color: colour }}>
          {label}
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className={`${open ? 'caret up' : 'dropdown icon'} `}></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
