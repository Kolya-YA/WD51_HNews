const Loader = ({ msg }) => {

    return (
        <div className=" my-16 mx-auto max-w-[fit-content] flex gap-4 items-center bg-white shadow py-6 px-10 rounded-lg">
            <div className="animate-spin duration-600 w-8 h-8 rounded-full flex justify-center items-start bg-orange-600">
                <div className="rounded-full h-6 w-6 bg-white" />
            </div>
            <p className="animate-pulse text-xl font-semibold text-orange-600">{ msg }</p>
        </div>
    )
}

export default Loader;