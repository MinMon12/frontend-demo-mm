const Card=({children})=>{
    let cardClass = "w-full shadow-xl max-w-md p-4 bg-purple border border-none rounded-lg sm:p-6 md:p-8 mx-auto mt-20";
    return (
        <div className={cardClass}>
            {children}
        </div>
    )
}

export default Card;