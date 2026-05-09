import './Vacancies.css'

export function Vacancies() {
    return (
        <div className='vacancies-container'>
            <div className='vacancy-wrap'>
                <img src="./vacancies/cook.png" alt="" />
                <div className='vacancy-upper-part'>
                    <p className='vacancy-black-font'>Earn more with lower fees</p>
                </div>
                <div className='vacancy-content'>
                    <div className='text-content'>
                        <p className='orange-font-vacancy'>Signup as a business</p>
                        <h2 className='white-heading-vacancy'>Partner with us</h2>
                    </div>
                    <button className='button-vacancy'>Get Started</button>
                </div>
            </div>
            <div className='vacancy-wrap'>
                <img src="./vacancies/rider.png" alt="" />
                <div className='vacancy-upper-part'>
                    <p className='vacancy-black-font'>Avail exclusive perks</p>
                </div>
                <div className='vacancy-content'>
                    <div className='text-content'>
                        <p className='orange-font-vacancy'>Signup as a rider</p>
                        <h2 className='white-heading-vacancy'>Ride with us</h2>
                    </div>
                    <button className='button-vacancy'>Get Started</button>
                </div>
            </div>
        </div>
    )
}