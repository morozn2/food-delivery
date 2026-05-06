import './Header.css'

export function Header() {
    return (
        <header>
            <img src="big-logo.png" alt="" />
            <div className='navigation'>
                <a href="#"><button className='active-page-nav'>Home</button></a>
                <a href="#"><button className='page-nav'>Browse Menu</button></a>
                <a href="#"><button className='page-nav'>Special Offers</button></a>
                <a href="#"><button className='page-nav'>Restaurants</button></a>
                <a href="#"><button className='page-nav'>Track Order</button></a>
            </div>
            <button className='acc-button'>
                <img src="./icons/male-user.png" alt="" />
                <p className='medium-white-font'>Login/Sign Up</p>
            </button>
        </header>
    )
}