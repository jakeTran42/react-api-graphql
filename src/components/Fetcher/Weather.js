import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import '../../styles/Weather.css'

const WEATHER_QUERY = gql`
  query Weather($city: String!) {
      api {
        weather(city: $city) {
            id
            name
            condition
            iconURL
        }
      }
  }
`

class Weather extends Component {

    constructor() {
        super();
        this.state = {
            city: "San Francisco"
        }
    }

  render() {

    const vars = { city: String(this.state.city) }

    const imageStyle = {
        borderRadius: '50%',
        border: '2px solid red'
    }

    return (
        <div>
            <label>What city for weather forecast: </label>
            <input type="text" value={this.state.city} onChange={e => this.setState({city: e.target.value})} />

            <Query query={WEATHER_QUERY} variables={vars}>
            {({ loading, error, data}) => {
                if (loading) return <div>Fetching you the best weather possible...</div>
                if (error) return <div>Error</div>

                const result = data.api.weather

                return (
                    <div className='eachWeather'>
                        <div className='weatherInfo'>
                            <h2>City: {result.name}</h2>
                            <h3>Forecast: {result.condition}</h3>
                        </div>
                        <img src={`${result.iconURL}`} alt={''} style={imageStyle} />
                    </div>
                )

            }}
        </Query>
        </div>
    )
  }
}

export default Weather