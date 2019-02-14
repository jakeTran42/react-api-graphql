import React, { Component } from 'react'
import Chuck from './Chuck'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const CHUCK_QUERY = gql`
  {
    api {
      chuckJoke {
          apiID
          identifier
          id
          joke
      }
    }
  }
`

class ChuckJoke extends Component {
  render() {
    return (
        <Query query={CHUCK_QUERY}>
            {({ loading, error, data}) => {
                if (loading) return <div>Waiting for Chuck Norris to approve of you fetching his joke...</div>
                if (error) return <div>Error</div>

                const joke = data.api.chuckJoke

                console.log(joke)

                return (
                    <div>
                        {<Chuck key={joke.apiID} chuck={joke} />}
                    </div>
                )

            }}
        </Query>
    )
  }
}

export default ChuckJoke