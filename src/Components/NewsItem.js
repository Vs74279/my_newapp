import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://ktla.com/wp-content/uploads/sites/4/2023/10/Waymo.jpg?w=1280" : imageUrl} className='card-img-top' alt='...' />
                    <div className='card-body'>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}
