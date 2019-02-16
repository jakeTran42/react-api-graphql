import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import '../../styles/Anime.css'

const ANIME_QUERY = gql`
  {
    api {
      anime {
          animes {
              id
              title
              rating
              nsfw
              status
              poster
          }
      }
    }
  }
`

const imageStyle = {
    borderRadius: '1%',
    border: '1px solid black'
}

class Anime extends Component {
  render() {
    return (
        <div>
            <h1>ANIME</h1>
            <Query query={ANIME_QUERY}>
                {({ loading, error, data}) => {
                    if (loading) return <div>Fetching the most popular anime for you..</div>
                    if (error) return <div>Error</div>

                    const results = data.api.anime.animes

                    return (
                        <div className='allAnime'>
                            {results.map((anime) => 
                                <div key={anime.id} className='eachAnime' >
                                    <img src={`${anime.poster}`} alt={'Not Available'} height="150" width="150" style={imageStyle} />
                                    <h3>{anime.title}</h3>
                                    <h4>Rating: {anime.rating}</h4>
                                    <h4>NSFW: {anime.nsfw.toString()}</h4>
                                    <h4>Status: {anime.status}</h4>
                                </div>
                            )}
                        </div>
                    )
                }}
            </Query>
        </div>
    )
  }
}

export default Anime