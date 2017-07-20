class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentVid: this.props.videos[0]
    };
  }
  
  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid} state={this.state}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.props.videos} state={this.state}/>
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