var VideoList = (props) => (

  // iterate through all of our props.videos (map)
    // create a new VideoListEntry with an attribute of video, with the video we get from map
  // console.log('VideoList props:'),
  // console.log(props),

  <div className="video-list">
    {props.videos.map(video => {
      var key = props.videos.indexOf(video);
      return <VideoListEntry video={video} key={key} state={props.state} titleClickHandler={props.titleClickHandler}/>;
    }
    )}
  </div>
  



);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
