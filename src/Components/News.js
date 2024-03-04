import React, { Component } from 'react';
import NewsItem from './NewsItem';


export default class News extends Component {
 
  constructor() {
    super();
    console.log("Hello i am a vikash from vikashnews");
    this.state = {
      articles: [],
      loading: false,
      page: 1
      
    };
  }

  componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25422050e35f4e6a9443457fe65cc094&page=1&pageSize=20";

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ articles: data.articles, totalArticles: data.totalResults });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25422050e35f4e6a9443457fe65cc094&page=${this.state.page - 1}&pageSize=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({ articles: data.articles, page: this.state.page - 1 });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25422050e35f4e6a9443457fe65cc094&page=${this.state.page + 1}&pageSize=20`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({ articles: data.articles, page: this.state.page + 1 });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>VikashNews - Top Headline</h1>
        <hr/>
        
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
              </div>
            );
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePreviousClick}> &larr; Previous</button>
          <button type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

  

