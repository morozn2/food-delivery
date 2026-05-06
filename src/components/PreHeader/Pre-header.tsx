import './Pre-header.css'

export function PreHeader() {
    return (
        <div className='pre-header-wrap'>
            <div className='discount-wrap'>
                <img src="./icons/🌟.png" alt="" draggable="false" />
                <p className='medium-font'>Get 5% off your first order, <span className='orange-bold-font'>Promo: ORDER5</span></p>
            </div>
            <div className='location-wrap'>
                <p className='medium-font'>Regent Street, <span className='text-underline'>A4</span>, A4201, London</p>
                <a href="" className='medium-orange-font'>Change Location</a>
            </div>
            <div className='cart-wrap'>
                <img src="./icons/shopping-basket.png" alt="" />
                <hr className='cart-wrap-hr'/>
                <p className='white-semibold-font'>23 Items</p>
                <hr className='cart-wrap-hr'/>
                <p className='white-semibold-font'>GBP 79.89</p>
                <hr className='cart-wrap-hr'/>
                <a href=""><img src="./icons/forward.png" alt="" /></a>
            </div>
        </div>
    )
}