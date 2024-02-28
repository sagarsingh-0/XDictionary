import React, { useState, useEffect } from "react";

const XDictionary = () => {
  const [input, setInput] = useState("");
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    // Set the initial state after the component mounts
    setDefinition("");
  }, []); // Empty dependency array ensures this effect runs once on mount

  const dictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const searchWord = () => {
    const foundWord = dictionary.find(
      (item) => item.word.toLowerCase() === input.toLowerCase()
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>XDictionary</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a word..."
        style={{
          width: "30%",
          padding: "10px",
          fontSize: "16px",
          marginBottom: "10px",
          gap: "10px",
        }}
      />
      <button
        onClick={searchWord}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          gap: "10px",
        }}
      >
        Search
      </button>
      <h2>Definition:</h2>

      {definition && (
        <>
          <p>{definition}</p>
        </>
      )}
    </div>
  );
};

export default XDictionary;

// 1. **Import React and useState from the 'react' library**:
//     - We import the necessary modules from the React library. `useState` is a hook that allows us to manage state within functional components.

// 2. **Define a functional component named XDictionary**:
//     - We create a functional component called `XDictionary`.

// 3. **Initialize state variables using the useState hook**:
//     - We use the `useState` hook to create two state variables: `input` (for user input) and `definition` (for storing word definitions).

// 4. **Define an array of words and their meanings (our dictionary)**:
//     - We create an array called `dictionary` containing word-meaning pairs.

// 5. **Define a function to search for a word in the dictionary**:
//     - The `searchWord` function checks if the input word exists in the dictionary.
//     - It uses the `find` method to search for a word (case-insensitive).
//     - If found, it sets the definition; otherwise, it sets a default message.

// 6. **Return the JSX (React elements) for rendering**:
//     - We return a JSX structure that represents the application interface.
//     - It includes an input field, a search button, and a display area for the word definition.
//     - The styles are applied using inline CSS.

// 7. **Display the application title**:
//     - We show the title "XDictionary" using an `<h1>` element.

// 8. **Input field for user to type a word**:
//     - We create an input field where users can type a word.
//     - The value of the input field is controlled by the `input` state variable.
//     - Placeholder text is provided: "Enter a word..."

// 9. **Search button**:
//     - We create a button labeled "Search."
//     - When clicked, it calls the `searchWord` function.

// 10. **Display word definition if available**:
//     - If a definition exists (i.e., `definition` is truthy), we display it using `<h2>` and `<p>` elements.
