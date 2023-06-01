import React, { useEffect, useState } from 'react'
import { animeApi } from '../../utils/AnimeApi'

export const TopAiring = () => {
    const [topAiring, setTopAiring] = useState([]);

    const getTopAiring = async () => {
        try {
            const data = await animeApi.getTopAiring()
            setTopAiring(data.results);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        if (topAiring.length === 0) {
          getTopAiring();
        }
      }, [topAiring.length]);

  return (
    <div>
        <h2>Top airing</h2>
        {topAiring.map((anime) => (
            <h3>{anime.title}</h3>
        ))}
    </div>
  )
}
