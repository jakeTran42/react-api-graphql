import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ADVICE_QUERY = gql`
  {
    api {
      advice {
          id
          advice
      }
    }
  }
`

class Advice extends Component {
  render() {
    return (
        <Query query={ADVICE_QUERY}>
            {({ loading, error, data}) => {
                if (loading) return <div>Fetching you some wise wisdom....</div>
                if (error) return <div>Error</div>

                return (
                    <div>
                        Advice: {data.api.advice.advice}
                    </div>
                )

            }}
        </Query>
    )
  }
}

export default Advice