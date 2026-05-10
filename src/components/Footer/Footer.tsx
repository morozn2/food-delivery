import './Footer.css'

export function Footer() {
    return (
        <footer>
            <div className='footer-content'>
                <div className='footer-right-side-wrap'>
                    <img src="./header/big-logo.png" alt="" className='footer-logo' />
                    <div className='download-apps'>
                        <img src="./apps/app-store.png" alt="" draggable="false" />
                        <img src="./apps/google-play.png" alt="" draggable="false" />
                    </div>
                    <p className='footer-paragraph'>Company # 490039-445, Registered with House of companies.</p>
                </div>
                <div className='exclusive-deals-footer'>
                    <h2 className='footer-heading'>Get Exclusive Deals in your Inbox</h2>
                    <div className='outer-input-wrap'>
                        <div className='input-wrap-footer'>
                            <input type="text" placeholder='youremail@gmail.com' className='footer-input' />
                            <button className='subscribe-button'>Subscribe</button>
                        </div>
                        <p className='small-footer-paragraph'>we wont spam, read our <a href="#" className='footer-span'>email policy</a></p>
                    </div>
                    <div className='socials'>
                        <a href="#"><img src="./icons/facebook.png" alt="" /></a>
                        <a href="#"><img src="./icons/instagram.png" alt="" /></a>
                        <a href="#"><img src="./icons/tiktok.png" alt="" /></a>
                        <a href="#"><img src="./icons/snapchat.png" alt="" /></a>
                    </div>
                </div>
                <nav className='footer-nav'>
                    <h2 className='footer-heading'>Legal Pages</h2>
                    <a href="">Terms and conditions</a>
                    <a href="">Privacy</a>
                    <a href="">Cookies</a>
                    <a href="">Modern Slavery Statement</a>
                </nav>
                <nav className='footer-nav'>
                    <h2 className='footer-heading'>Important Links</h2>
                    <a href="">Get Help</a>
                    <a href="">Add your restaurant</a>
                    <a href="">Sign up to deliver</a>
                    <a href="">Create a business account</a>
                </nav>
            </div>
            <div className='copyright'>
                <div className='copyright-content'>
                    <p className='copyright-font'>Order.uk Copyright 2024, All Rights Reserved.</p>
                    <div className='copyright-right-side'>
                        <a href="" className='copyright-font'>Privacy Policy</a>
                        <a href="" className='copyright-font'>Terms</a>
                        <a href="" className='copyright-font'>Pricing</a>
                        <a href="" className='copyright-font'>Do not sell or share my personal information</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}