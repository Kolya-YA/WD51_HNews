import { useState } from "react";

const Header = ({ setQueryStr }) => {

    const [inputValue, setInputValue] = useState('')

    const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setQueryStr(search);
   }

    const handleInput = ({ target }) => {
        setInputValue(target.value)
    }

    const handleReset = () => {
        setInputValue('')
        setQueryStr('')
    }

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex gap-4 justify-between items-center">
                <h1 className="text-3xl font-bold text-orange-600">Pseudo news XXL</h1>
                <search>
                    <form className="flex gap-2 items-center" onSubmit={handleSearch}>
                        <label htmlFor="search" className="sr-only">Search</label>
                        <input onChange={handleInput} value={inputValue} id="search" type="search" placeholder="Search" className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                        <button type="submit" className="px-4 py-2 border rounded-lg transition hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">Search</button>
                        <button onClick={handleReset} type="button" className="px-4 py-2 border rounded-lg transition hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">Show all</button>
                    </form>
                </search>
            </div>
        </header>
    )
}

export default Header;