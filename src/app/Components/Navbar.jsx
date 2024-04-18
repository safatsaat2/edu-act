
export default function Navbar(){
    const menuItems= [
        {
            "name":"Home",
            "link": "/"
        },
        {
            "name":"Special Offer",
            "link": "/"
        },
        {
            "name":"Courses",
            "link": "/"
        },
        {
            "name":"Blogs",
            "link": "/"
        },
        {
            "name":"About",
            "link": "/"
        },
        {
            "name":"Contact",
            "link": "/"
        },
    ]



    return(
        <>
        <header>
            <nav className="navParent flex p-6 justify-between">
                <div className="logoSec">
                    <img className="logo w-[200px]" src="/Logo.png" alt="Logo" />
                </div>
                <ul className="menuItems flex items-center gap-x-4">
                    {
                        menuItems.map((menuItem => <li key={menuItem.name} className="menuItem">
                        <a className="hover:text-[#f57005] text-md" href={menuItem.link}>{menuItem.name}</a>
                    </li>))
                    }
                    
                </ul>
                <div className="buttonSec">
                    <a className="srsBtnBig" href="#">
                        Sign Up
                    </a>
                    <a className="srsBtnBig ml-5" href="#">
                        Log In
                    </a>
                </div>
            </nav>
        </header>
        </>
    )
}