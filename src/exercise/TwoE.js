import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/users';

const TwoE = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(URL);
      setUsers(data);
    })();
  }, []);

  const renderUser = users.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  return <div>{renderUser}</div>;
};

export default TwoE;
