import React, { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/generate-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: query }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setGeneratedContent(data.content.text);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Generate Content</button>
      </form>
      <div>
        <h2>Generated Content:</h2>
        <p>{generatedContent}</p>
      </div>
    </div>
  );
}

export default Search;
