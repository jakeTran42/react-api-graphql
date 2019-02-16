import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import '../../styles/Article.css'

const ARTICLE_QUERY = gql`
  {
    api {
      newsfeed {
          news {
              source
              title
              articleURL
              articleImg
          }
      }
    }
  }
`



class Article extends Component {
  render() {
    return (
        <Query query={ARTICLE_QUERY}>
            {({ loading, error, data}) => {
                if (loading) return <div>Fetching you the best news...</div>
                if (error) return <div>Error</div>

                const result = data.api.newsfeed.news

                return (
                    <div className='allArticle'>
                        {result.map((article) => 
                        <div key={article.title} className='eachArticle'>
                            <h3>{article.title}</h3>
                                <h4><a href={`${article.articleURL}`}>{article.source}</a></h4>
                                <img src={`${article.articleImg}`} alt={'No Available'} height="200" width="200" className='imageStyle' />
                        </div> )}
                    </div>
                )

            }}
        </Query>
    )
  }
}

export default Article