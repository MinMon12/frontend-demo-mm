const Header=({children})=>{
    let headerclass="text-3xl text-center font-medium text-white";
    return (
        <h2 className={headerclass}>
            {children}
        </h2>
    )
}

export default Header;