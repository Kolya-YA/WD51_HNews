const Header = () => {

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex gap-4 justify-between items-center">
                <h1 className="text-3xl font-bold text-orange-600">Pseudo news XXL</h1>
                <search>
                    <form className="flex gap-2 items-center">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <input id="search" type="search" placeholder="Search" className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                        <button type="button" className="px-4 py-2 border rounded-lg transition hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">Search</button>
                        <button type="reset" className="px-4 py-2 border rounded-lg transition hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300">Show all</button>
                    </form>
                </search>
            </div>
        </header>
    )
}

export default Header;