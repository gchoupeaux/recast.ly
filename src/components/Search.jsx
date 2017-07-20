var Search = (props) => (

  <div className="search-bar form-inline">

    <input onChange={ 
      _.debounce( () => {
        props.options.query = $('.form-control').val();
        props.searchFunction(props.options, props.searchHandler);
      }, 500 ) } className="form-control" type="text"/>

    <button onClick={ () => {
      // console.log($('.form-control').val());
      props.options.query = $('.form-control').val();
      props.searchFunction(props.options, props.searchHandler);
    } } className="btn-sm-down">

      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);



//{ key: 'API_KEY', query: 'cats', max: 10 }


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
