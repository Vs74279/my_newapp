import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    console.log("Hello i am a vikash from vikashnews");
    this.state ={
         articles: [],
         loading: false
    }
  }
  componentDidMount() {
    
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25422050e35f4e6a9443457fe65cc094";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({ articles: data.articles });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

  render() {
    return (
      <div className='container my-3'>
          <h1>VikashNews - Top Headline</h1>
        <div className='row'>
          {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
        
            <NewsItem title={element.title?element.title.slice(0,50):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
         </div>
          })}
      
        </div>
        
        </div>
        
      
    )
  }
}
