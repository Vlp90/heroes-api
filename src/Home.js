import React from 'react'
import './Home.css'
import Search from "./components/Search";


function Home() {
    return (
        <div className='home'>
            <div className="home__search">
          <Search />
        </div>
        </div>
    )
}

export default Home
