class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentVidList: window.exampleVideoData,
      currentVid: window.exampleVideoData[0]
    };
    this.titleClickHandler = this.titleClickHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    _.debounce(this.searchHandler, 3000);
  }

  componentDidMount() {
    this.props.searchYouTube({key: window.YOUTUBE_API_KEY, query: 'cats', max: '5'}, this.searchHandler);
  }

  titleClickHandler(video) {
    this.setState({
      currentVid: video
    });
  }

  searchHandler(vidList) {
    this.setState({
      currentVidList: vidList,
      currentVid: vidList[0]
    });
  }
  
  render() {

    var searchOptions = {
      key: window.YOUTUBE_API_KEY,
      query: 'cats',
      max: '5'
    }; 

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchFunction={this.props.searchYouTube} searchHandler={this.searchHandler} options={searchOptions}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.currentVidList} state={this.state} titleClickHandler={this.titleClickHandler}/>
          </div>
        </div>
      </div>
    );
  }
  
}






// var App = (props) => (
  
//   console.log('App props:'),
//   console.log(props),

  
// );

// // In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



// This will be the only Class Component in this app

// class App extends React.Component {
  
// }


// From className="col-md-5"
// <div><h5><em>videoList</em> view goes here</h5></div>