import { Fragment, useState } from 'react';
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const titleClicked = (index) => {
    console.log(index);
    setActiveIndex(index);
  };

  const renderItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <Fragment key={index}>
        <div className={`title ${active}`} onClick={() => titleClicked(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderItems}</div>;
};

export default Accordion;
