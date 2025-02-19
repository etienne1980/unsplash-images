import React from 'react'
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useGlobalContext} from "./Context.jsx";

const url = 'https://api.unsplash.com/search/photos?';

const apiKey = import.meta.env.VITE_API_KEY;
// console.log(apiKey)

const Gallery = () => {

    const {searchTerm} = useGlobalContext();

    const params = new URLSearchParams({
        query: searchTerm,
        client_id:`${apiKey}`,
        page: 3,
        per_page:20,
        order_by:'latest',
        orientation:'portrait',

    });


    const {data,isLoading,isError} = useQuery({
        queryKey: ['images',searchTerm],
        queryFn: () => axios.get(`${url}${params}`),
    });

    if (isLoading){
        return <h3> ... loading pictures</h3>
    };

    if (isError){
        return <h3>There was an error. Pls try again later</h3>
    };

    let mySearchMery = data.data.results;
    // console.log(mySearchMery)

    if (mySearchMery.length < 1){
        return <h3>there is no result for your search. Try searching something different</h3>
    }

    return (
        <section className='image-container'>
            {mySearchMery.map((picture)=>{
                // console.log(picture)
                const id = picture?.id;
                const url = picture?.urls?.regular;
                const alt = picture?.alt_description;

                return <img className='img' key={id} src={url} alt={alt}/>
            })}
        </section>
    )
}
export default Gallery
/*

Using environment variables is a standard practice for managing sensitive information, such as API keys, credentials, and other configuration data. It helps keep this information secure and separate from your codebase.

1. Create a .env file: This is where you'll store your sensitive information.

2. Add .env to .gitignore: This ensures that the .env file is not included in your version control system (like Git), so it won't be pushed to GitHub.

3. Define environment variables in .env: Follow the NAME=VALUE format. In your case, using VITE_ is specific to Vite.js, which is a build tool. If you were using a different framework or environment, the prefix might be different (e.g., REACT_APP_ for React applications).

VITE_API_KEY=your_api_key_here

4. Restart your server: This is necessary for the changes to take effect.

5. Access the environment variable in your code: You can use import.meta.env in Vite.js to access the environment variable.

const apiKey = import.meta.env.VITE_API_KEY;

By following these steps, you're ensuring that your sensitive information is kept separate from your codebase, which helps maintain security and privacy. It's a good practice for managing configuration in any project, particularly when it comes to sensitive data.

*/