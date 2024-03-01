import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
          <h1>VikashNews - Top Headline</h1>
        <div className='row'>
        <div className='col-md-4'>
            <NewsItem title="MyTitle" description="Mydesc"/>
        </div>
        <div className='col-md-4'>
            <NewsItem title="MyTitle" description="Mydesc"/>
        </div>
        <div className='col-md-4'>
            <NewsItem title="MyTitle" description="Mydesc"/>
        </div>
        
        </div>
        
      </div>
    )
  }
}
