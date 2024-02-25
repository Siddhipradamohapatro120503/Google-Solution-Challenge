import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './style/search.css'; // Import CSS file for styling

function Search() {
  const [query, setQuery] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State variable for loading indicator

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when search begins

    try {
      const response = await fetch('http://' + process.env.REACT_APP_HOST + ':8000/generate', {
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
      console.log('Response:', data); // Log the response data

      // Check if the response contains the expected structure
      if (!data.response || typeof data.response !== 'string') {
        throw new Error('Invalid response data structure');
      }

      setGeneratedContent(data.response);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Set loading to false after search completes (whether successful or not)
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <section className="laws search" id="laws">
        <h1 className="section-title">Laws</h1>
        <div className="search_bar">
          <form onSubmit={handleSubmit}>
            <input type="text" id="searchInput" placeholder="Search laws..." onChange={handleInputChange} value={query} />
            <button className="button dropbtn" type="submit" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Search'} {/* Display "Loading..." when isLoading is true */}
            </button>
          </form>
          <div className="laws__item">
            <h2>Laws Content:</h2>
            <div className="markdown-content">
              <ReactMarkdown>{generatedContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
