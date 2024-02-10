import React, { useState } from 'react';
import axios from 'axios';

const DataFetcher = () => {
  const [inputValue, setInputValue] = useState('');
  const [textData, setTextData] = useState('');
  const [imageData, setImageData] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Fetch text data
      const textResponse = await axios.get(`http://localhost:8000/text?input=${inputValue}`);
      setTextData(textResponse.data);

      // Fetch image data
      const imageResponse = await axios.get(`http://localhost:8000/image?input=${inputValue}`);
      setImageData(imageResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Submit</button>

      <div>
        <h2>Text Data:</h2>
        <p>{textData}</p>
      </div>

      <div>
        <h2>Image Data:</h2>
        <img src={imageData} alt="Fetched Image" />
      </div>
    </div>
  );
};

export default DataFetcher;
