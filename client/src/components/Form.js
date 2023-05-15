import React, { useEffect, useState } from 'react';

const Form = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');
  const [editIndex, setEditIndex] = useState(-1); // New state variable to track the index of the item being edited
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentItem.trim() === '') {
      setError('Please enter a valid movie');
      return;
    }

    setError('');

    if (editIndex === -1) {
      // If not in edit mode, add a new item
      setItems([...items, currentItem]);
    } else {
      // If in edit mode, update the existing item
      const updatedItems = [...items];
      updatedItems[editIndex] = currentItem;
      setItems(updatedItems);
      setEditIndex(-1); // Exit edit mode
    }

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

  const editItem = (index) => {
    setCurrentItem(items[index]);
    setEditIndex(index);
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
          <button type="submit">{editIndex === -1 ? 'Add' : 'Update'}</button>
        </div>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <br/>
            <span className='edit'>
              <button className='edit-btn' onClick={() => editItem(index)}>Edit</button>
              <button className='delete' onClick={() => deleteItem(index)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
