import './Discounts.css'

export function Discounts() {
    return (
        <div className='discounts-wrap'>
            <div className='discounts-heading-wrap'>
                <h2 className='discounts-heading-font'>Up to -40% <img src="./icons/confetti-ball.png" alt="" className='discounts-confetti'/> Order.uk 
                exclusive deals</h2>
                <div className='discounted-food-wrap'>
                    <button className='food-type-button'>Vegan</button>
                    <button className='food-type-button'>Sushi</button>
                    <button className='active-food-type-button'>Pizza & Fast food</button>
                    <button className='food-type-button'>Others</button>
                </div>
            </div>
            <div className='discounted-restaurants'>
                <div className='food-photo-wrap'>
                    <img src="./discounts/burgers.png" alt="" className='food-photo'/>
                    <div className='food-photo-content'>
                        <p className='orange-font'>Restaurant</p>
                        <p className='white-font'>Chef Burgers London</p>
                    </div>
                </div>
                <div className='food-photo-wrap'>
                    <img src="./discounts/salads.png" alt="" className='food-photo'/>
                    <div className='food-photo-content'>
                        <p className='orange-font'>Restaurant</p>
                        <p className='white-font'>Grand Ai Cafe London</p>
                    </div>
                </div>
                <div className='food-photo-wrap'>   
                    <img src="./discounts/burgers.png" alt="" className='food-photo'/>
                    <div className='food-photo-content'>
                        <p className='orange-font'>Restaurant</p>
                        <p className='white-font'>Butterbrot Cafe London</p>
                    </div>
                </div>
            </div>
        </div>
    )
}