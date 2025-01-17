import { useDispatch, useSelector } from 'react-redux'
import { addCatalogSuccess, setSearchText } from '../store/actions';

function Search() {

    const { currentCategory, textSearch } = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    const handlerFetchSearch = async (event) => {
        event.preventDefault();
        const response = currentCategory !== null ? await fetch(`http://localhost:7070/api/items?categoryId=${currentCategory}&q=${textSearch.text}`) : await fetch(`http://localhost:7070/api/items?q=${textSearch.text}`)
        const itemsSearch = await response.json();
        dispatch(addCatalogSuccess(itemsSearch))
    }
    const handlerSearchText = (event) => {
        dispatch(setSearchText(event.target.value))
    }

    return (
        <form className="catalog-search-form form-inline" onSubmit={handlerFetchSearch}>
            <input className="form-control" placeholder="Поиск" value={textSearch.text} onChange={handlerSearchText} />
        </form>
    )
}

export default Search

