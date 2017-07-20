//{ key: 'API_KEY', query: 'cats', max: 10 }

var searchYouTube = (options, callback) => {
  // return exampleVideoData;
  // callback must be the event handler
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      videoEmbeddable: 'true',
      type: 'video'
    },
    datatype: 'json',
    
    success: (data) => {
      // console.log(data);
      callback(data.items);
    },
    error: (error) => {
      console.error(error.responseText);
    }
  });
};

window.searchYouTube = searchYouTube;
