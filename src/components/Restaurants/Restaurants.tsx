import './Restaurants.css'

export function Restaurants() {
    return (
        <div className='restaurants-wrap'>
            <h2 className='restaurants-heading-font'>Popular Restaurants</h2>
            <div className='restaurants'>
                <div className='restaurant-card'>
                    <img src="./restaurants/mcdonalds.png" alt="" draggable="false" />
                    <h4 className='restaurant-card-heading'>McDonald's London</h4>
                </div>
                <div className='restaurant-card'>
                    <img src="./restaurants/papa-johns.png" alt="" draggable="false" />
                    <h4 className='restaurant-card-heading'>Papa Johns</h4>
                </div>
                <div className='restaurant-card'>
                    <img src="./restaurants/kfc.png" alt="" draggable="false" />
                    <h4 className='restaurant-card-heading'>KFC West London</h4>
                </div>
                <div className='restaurant-card'>
                    <img src="./restaurants/texas-chicken.png" alt="" draggable="false" />
                    <h4 className='restaurant-card-heading'>Texas Chicken</h4>
                </div>
                <div className='restaurant-card'>
                    <img src="./restaurants/burger-king.png" alt="" draggable="false" />
                    <h4 className='restaurant-card-heading'>Burger King</h4>
                </div>
                <div className='restaurant-card'>
                    <img src="./restaurants/shaurma.png" alt="" draggable="false" />
                    <h4 className='restaurant-card-heading'>Shaurma 1</h4>
                </div>
            </div>
        </div>
    )
}