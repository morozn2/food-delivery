import './Categories.css'

export function Categories() {
    return (
        <div className='categories-wrap'>
            <h2 className='categories-heading-font'>Order.uk Popular Categories <img src="./icons/star-struck.webp" alt="" className='emoji' /></h2>
            <div className='food-restaurants'>
                <div className='category'>
                    <img src="./categories/burger-category.png" alt="" draggable="false" />
                    <h2 className='category-heading-font'>Burgers & Fast food</h2>
                    <p className='category-orange-font'>21 Restaurant</p>
                </div>
                <div className='category'>
                    <img src="./categories/salad-category.png" alt="" draggable="false" />
                    <h2 className='category-heading-font'>Salads</h2>
                    <p className='category-orange-font'>32 Restaurants</p>
                </div>
                <div className='category'>
                    <img src="./categories/pasta-category.png" alt="" draggable="false" />
                    <h2 className='category-heading-font'>Pasta & Casuals</h2>
                    <p className='category-orange-font'>4 Restaurants</p>
                </div>
                <div className='category'>
                    <img src="./categories/pizza-category.png" alt="" draggable="false" />
                    <h2 className='category-heading-font'>Pizza</h2>
                    <p className='category-orange-font'>32 Restaurants</p>
                </div>
                <div className='category'>
                    <img src="./categories/breakfast-category.png" alt="" draggable="false" />
                    <h2 className='category-heading-font'>Breakfast</h2>
                    <p className='category-orange-font'>4 Restaurants</p>
                </div>
                <div className='category'>
                    <img src="./categories/soup-category.png" alt="" draggable="false" />
                    <h2 className='category-heading-font'>Soup</h2>
                    <p className='category-orange-font'>32 Restaurants</p>
                </div>
            </div>
        </div>
    )
}