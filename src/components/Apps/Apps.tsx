import './Apps.css'

export function Apps() {
    return (
        <div className='apps-wrap'>
            <img src="./apps/couple.png" alt="" className='couple-background'/>
            <img src="./apps/couple.png" alt="" className='couple-foreground'/>
            <div className='apps-content'>
                <div className='apps-content-heading'>
                    <img src="./header/big-logo.png" alt="" />
                    <h2 className='apps-heading-font'>ing is more</h2>
                </div>
                <h3 className='apps-white-font'><span className='orange-font-apps'>Personalised</span> & Instant</h3>
                <p className='apps-paragraph'>Download the Order.uk app for faster ordering</p>
                <div className='app-download-container'>
                    <img src="./apps/app-store.png" alt="" />
                    <img src="./apps/google-play.png" alt="" />
                </div>
            </div>
        </div>
    )
}