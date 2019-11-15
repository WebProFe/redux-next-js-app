import React from "react";
import { connect } from 'react-redux';
import MyLayout from '../MyLayout';
import * as passagesActions from '../../redux/actions/passagesActions';
// import * as problemsActions from '../../actions/problemsActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import PassageList from './PassagesList';
import InfiniteScroll from "react-infinite-scroll-component";

class PassagesPage extends React.Component {

  state = {
    pageCount: 1
  }

  componentDidMount(){
      this.props.actions.loadPassages()
      .catch(error => alert("Loading passages failed " + error))
}

loadMore = ()=>{
    this.props.actions.loadMorePages(this.state.pageCount)
    this.setState({ pageCount: this.state.pageCount + 1})

  }

  render() {
    return (
      <MyLayout>
        <h2>Passages</h2>
        <InfiniteScroll
          dataLength={this.props.passages.length}
          next={this.loadMore}
          hasMore={true}
          loader={<h4>Loading more passages...</h4>}
        >
          <PassageList passages={this.props.passages} />
        </InfiniteScroll> 
      </MyLayout>
      );
  }
}

PassagesPage.propTypes = {
  // problems: PropTypes.array.isRequired,
  passages: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state){
  return{
    passages: state.passages.length === 0 
      ? []
      : state.passages.passages.map( passage => {
      return {
        ...passage      }
    }),
    // problems: state.problems
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPassages: bindActionCreators(passagesActions.loadPassages, dispatch),
      loadMorePages: bindActionCreators(passagesActions.loadMorePages, dispatch),
      // loadProblems: bindActionCreators(problemsActions.loadProblems, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PassagesPage);
