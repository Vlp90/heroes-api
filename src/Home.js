import React from 'react'
import './Home.css'
import Search from "./components/Search";
import SearchHeader from "./components/SearchHeader";


function Home() {
    return (
        <div className='home'>
            <div className="home__search">
          <Search />
          {/* <SearchHeader /> */}
        </div>
        </div>
    )
}

export default Home
