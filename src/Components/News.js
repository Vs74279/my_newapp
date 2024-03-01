import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [{"source":{"id":"abc-news-au","name":"ABC News (AU)"},"author":"Simon Smale","title":"New Zealand vs Australia Test series all too rare due to decades of indifference","description":"Australia and New Zealand are the closest of sporting rivals. But when it comes to Test match cricket, tours between the two are all too often an afterthought.","url":"https://www.abc.net.au/news/2024-02-28/australia-test-tour-of-new-zealand-the-forgotten-tour/103426726","urlToImage":"https://live-production.wcms.abc-cdn.net.au/26af65025472bc7a50c54211dec2cd6d?impolicy=wcms_crop_resize&cropH=1688&cropW=3000&xPos=0&yPos=53&width=862&height=485&imformat=generic","publishedAt":"2024-02-27T20:42:19Z","content":"It's almost fitting that this Test series between New Zealand and Australia starts on as obscure a date as February 29.\r\nThere have only been five Tests in the 2,531-match history of Test cricket, en… [+13479 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}]
  constructor(){
    super();
    console.log("Hello i am a vikash from vikashnews");
    this.state ={
         articles: this.articles,
         loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
          <h1>VikashNews - Top Headline</h1>
        <div className='row'>
          {this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
        
            <NewsItem title={element.title.slice(0,50)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
         </div>
          })}
      
        </div>
        
        </div>
        
      
    )
  }
}
