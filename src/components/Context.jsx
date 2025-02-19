import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const appContext = createContext();
export const useGlobalContext = () => useContext(appContext);

// Function to get the initial dark mode setting
const getInitialDarkMode = () => {
    // Check if the user's system prefers dark mode (based on OS settings)
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check if the user has a saved preference in localStorage
    const storedDarkMode = localStorage.getItem('dark-theme');

    // If there is a stored preference, parse it (since localStorage saves everything as a string)
    // Otherwise, fall back to the user's system preference
    return storedDarkMode ? JSON.parse(storedDarkMode) : prefersDarkMode;

};

const Context = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState('cat');

    const toggleDarkTheme = () => {
        // Toggle the current theme (switch from true → false or false → true)
        const newDarkTheme = !isDarkTheme;

        // Update the state with the new theme value
        setIsDarkTheme(newDarkTheme);

        // Store the new preference in localStorage so it persists after page reload
        localStorage.setItem('dark-theme', JSON.stringify(newDarkTheme));
    };

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme]);

    return (
        <appContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}>
            {children}
        </appContext.Provider>
    );
};

export default Context;

/*	1.	storedDarkMode ? → This checks if storedDarkMode has a value.
	•	If storedDarkMode is not null, it means a theme preference exists in localStorage.
	•	If storedDarkMode is null, no saved preference exists.
	2.	JSON.parse(storedDarkMode)
	•	If storedDarkMode exists, it is retrieved from localStorage as a string ("true" or "false").
	•	JSON.parse() converts this string into a boolean (true or false).
	3.	: prefersDarkMode
	•	If storedDarkMode does not exist (null), it falls back to the system setting (prefersDarkMode).*/
