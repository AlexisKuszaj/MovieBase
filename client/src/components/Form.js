import React, { useEffect, useState } from 'react';

const Form = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    if (currentItem.trim() === '') {
      setError('Please enter a valid movie');
      return;
    }

    setError('');

    // Add the item to the list
    setItems([...items, currentItem]);
    setCurrentItem('');
  };

  const handleInputChange = (event) => {
    setCurrentItem(event.target.value);
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className='form'>
      <h2>Want to Watch</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <input
            type="text"
            value={currentItem}
            onChange={handleInputChange}
            placeholder="Enter a Movie"
          />
          <br/>
          {error && <p className="error">{error}</p>}
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <br/>
            <span className='edit'>
              <button>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
