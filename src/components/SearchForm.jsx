
import {toast} from "react-toastify";
import {useGlobalContext} from "./Context.jsx";

const SearchForm = () => {

   const {setSearchTerm} = useGlobalContext()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        // e.target is the form (dom element which triggered the event)

        if (!searchValue){
            toast.warning('please enter search value');
            return
        }

        setSearchTerm(searchValue);
    }


    /*
    * Key Points to Remember:
	1.	e.target.elements gives you all the elements inside the form.
	2.	Use .value to access the input values.
	3.	The form elements are indexed by their name attribute.
*/


    return (
        <section>
            <h1 className='title'>unsplash images</h1>
            <form className='search-form' onSubmit={handleSubmit} >
                <input className='form-input search-input' placeholder='cat' name='search' type="text" />
                <button className='btn' type='submit'>search</button>
            </form>
        </section>
    )
}
export default SearchForm
