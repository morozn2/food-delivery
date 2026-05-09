import './AboutUs.css'

export function AboutUs() {
    return (
        <div className='about-us-container'>
            <div className='about-us-heading-wrap'>
                <h2 className='about-us-heading'>Know more about us!</h2>
                <div className='about-us-buttons-wrap'>
                    <button className='about-us-button-active'>Frequent Questions</button>
                    <button className='about-us-button'>Who we are?</button>
                    <button className='about-us-button'>Partner program</button>
                    <button className='about-us-button'>Help & Support</button>
                </div>
            </div>
            <div className='answers-container'>
                <div className='faq-container'>
                    <button className='active-faq-button'>How does Order.UK work?</button>
                    <button className='faq-button'>What payment methods are accepted?</button>
                    <button className='faq-button'>Can I track my order in real-time?</button>
                    <button className='faq-button'>Are there any special discounts or promotions available?</button>
                    <button className='faq-button'>Is Order.UK available in my area?</button>
                </div>
                <div className='answer-content'>
                    <div className='answer-card'>
                        <h3 className='card-heading'>Place an Order!</h3>
                        <img src="./aboutus/order-food.png" alt="" />
                        <p className='about-us-paragraph'>Place order through our website or Mobile app</p>
                    </div>
                    <div className='answer-card'>
                        <h3 className='card-heading'>Track Progress</h3>
                        <img src="./aboutus/food.png" alt="" />
                        <p className='about-us-paragraph'>Your can track your order status with delivery time</p>
                    </div>
                    <div className='answer-card'>
                        <h3 className='card-heading'>Get your Order!</h3>
                        <img src="./aboutus/order.png" alt="" />
                        <p className='about-us-paragraph'>Receive your order at a lighting fast speed!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}