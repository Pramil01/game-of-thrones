import React from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import Got from './img/Got.jpg';

let style={
  width:'100%',
  height:'10% !important',
  padding:' 0px 30px',
  color:'#ffffff'
}
class App extends React.Component {
  state = {isLoaded: false,item: [] ,fullItems:[]};
    async componentDidMount(){
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await response.json();
        this.setState({isLoaded:true,item:data,fullItems:data});
      }
  onSearchChange =(term)=>{
    if(term.length!==0){
    this.setState({item :this.state.fullItems.filter((element)=>element.fullName.toUpperCase().includes(term.toUpperCase()))});
    }
    else{
      this.setState({item:this.state.fullItems});
    }
  }
  render(){
    const{isLoaded , item } = this.state;
    return (
      <div  style={{padding : '20px 0px',backgroundColor: '#000000',minHeight:'100vh'}}>
        <img alt="GotLogo" src={Got} style={style}/>
        <SearchBar onChange={this.onSearchChange}/>
        <br />
        <ImageList isLoaded={isLoaded} item={item}/>
      </div>
    );
  }
}

export default App;
