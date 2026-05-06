import './Hero.css'

export function Hero() {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <p className='regular-font'>Order Restaurant food, takeaway and groceries</p>
                <h2 className='big-font'>Feast Your Senses, <span className='orange-font'>Fast and Fresh</span></h2>
                <p className='small-regular-font'>Enter a postcode to see what we deliver</p>
                <div className='input-wrap'>
                    <input type="text" placeholder='e.g. EC4R 3TE' className='postcode-input' />
                    <button className='input-search-button'>Search</button>
                </div>
            </div>
            <img src="hero-decor.png" alt="" className='hero-decor' />
            <img src="pizza-girl.png" alt="" className='pizza-girl' />
            <img src="noodles-girl.png" alt="" className='noodles-girl' />
            <div className='hero-notification notif-position-one'>
                <p className='number-font'>1</p>
                <div className='notif-logo-wrap'>
                    <img src="small-logo.png" alt="" className='notification-logo' />
                    <p className='notif-grey-font'>now</p>
                </div>
                <div className='notif-text-wrap'>
                    <div className='notif-heading-wrap'>
                        <h5 className='notif-heading'>We've Received your order!</h5>
                        <img src="./icons/tracking.png" alt="" className='notif-icon' />
                    </div>
                    <p className='notif-text'>Awaiting Restaurant acceptance</p>
                </div>
            </div>
            <div className='hero-notification notif-position-two'>
                <p className='number-font'>2</p>
                <div className='notif-logo-wrap'>
                    <img src="small-logo.png" alt="" className='notification-logo' />
                    <p className='notif-grey-font'>now</p>
                </div>
                <div className='notif-text-wrap'>
                    <h5 className='notif-heading'>Order Accepted!</h5>
                    <p className='notif-text'>Your order will be delivered shortly</p>
                </div>
            </div>
            <div className='hero-notification notif-position-three'>
                <p className='number-font'>3</p>
                <div className='notif-logo-wrap'>
                    <img src="small-logo.png" alt="" className='notification-logo' />
                    <p className='notif-grey-font'>now</p>
                </div>
                <div className='notif-text-wrap'>
                    <div className='notif-heading-wrap'>
                        <h5 className='notif-heading'>Your rider's nearby!</h5>
                        <img src="./icons/popper.png" alt="" className='notif-icon' />
                    </div>
                    <p className='notif-text'>They're almost there - get ready!</p>
                </div>
            </div>
        </div>
    )
}