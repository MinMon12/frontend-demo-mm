const SecondaryButton=({children})=>{
    let buttonClass = "w-full text-lg text-white border border-white hover:opacity-75 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5";
    return (
        <button className={buttonClass}>
            {children}
        </button>
    )
}

export default SecondaryButton;