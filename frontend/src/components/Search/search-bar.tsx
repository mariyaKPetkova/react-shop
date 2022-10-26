import { useState } from "react";
import { Link } from "react-router-dom";

import { SearchState } from "../../types";

const SearchBar = () => {
    const [seachedWord, setSeachedWord] = useState<SearchState>({ word: '' })


    const handleChange = (e: { target: { value: string } }) => {
        const sWord = e.target.value
        setSeachedWord({ word: sWord })
    }
    const search = () => {
        setSeachedWord({ word: '' })
    }

    return (
        <div className="input-group">
            <input onChange={handleChange} value={seachedWord.word} className="form-control rounded" />
            <Link to={`/search/${seachedWord.word}`} onClick={search} className="btn btn-outline-primary">search</Link>
        </div>
    )
}
export default SearchBar