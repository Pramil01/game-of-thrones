import React, { Component } from 'react';
import Loader from './Loader.js'
import './ImageList.css'
export default class ImageList extends Component {
 
    render() {
      const images = this.props.item.map((data)=>{
        return (
        <div key={data.id} className="flip-card">
          <div className="flip-card-inner">
          <div className="flip-card-front">
            <img alt={data.firstName} src={data.imageUrl}/>
            </div>
            <div className="flip-card-back">
              <h1>{data.title}</h1>
              <p>{data.fullName}</p>
              <p>{data.family}</p>
            </div>
          </div>
        </div>
        );
      });
        return (
            <div>
                <div className="Images" >
                {this.props.isLoaded ? images: <Loader text="Loading..."/>} 
                </div>
            </div>
        )
    }
}
