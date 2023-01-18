import React from 'react';
import Link from '../helper/Link';

const Header = () => {
  return (
    <div className='ui secondry pointing menu'>
      <Link href='/' className='item'>
        Accordion
      </Link>
      <Link href='/search' className='item'>
        Search
      </Link>
      <Link href='/dropdown' className='item'>
        Dropdown
      </Link>
      <Link href='/translate' className='item'>
        Translater
      </Link>
      <Link href='/test-1' className='item'>
        Exercise-1
      </Link>
      <Link href='/test-2' className='item'>
        Exercise-2
      </Link>
    </div>
  );
};

export default Header;
