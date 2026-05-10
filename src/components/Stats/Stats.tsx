import './Stats.css'

export function Stats() {
    return (
        <div className='stats-container'>
            <div className='stat'>
                <h1 className='stat-heading'>546+</h1>
                <p className='stat-paragraph'>Registered Riders</p>
            </div>
            <hr className='stats-hr'/>
            <div className='stat'>
                <h1 className='stat-heading'>789,900+</h1>
                <p className='stat-paragraph'>Orders Delivereds</p>
            </div>
            <hr className='stats-hr'/>
            <div className='stat'>
                <h1 className='stat-heading'>690+</h1>
                <p className='stat-paragraph'>Restaurants Partnered</p>
            </div>
            <hr className='stats-hr'/>
            <div className='stat'>
                <h1 className='stat-heading'>17,457+</h1>
                <p className='stat-paragraph'>Food Items</p>
            </div>
        </div>
    )
}