import React from 'react';
import sampleData from '../../../helpers/sampleData';

import Questions from './QnAComponents/Questions';

class QnA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: sampleData.questionList.results.slice(0, 4),
      fullQuestionList: sampleData.questionList.results,
      query: '',
      queryList: sampleData.questionList.results,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { questionList } = this.props;
    if (prevProps.questionList !== questionList) {
      const fullQuestionList = questionList.results;
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        questionList: fullQuestionList.slice(0, 4),
        queryList: fullQuestionList,
        fullQuestionList,
      });
    }
  }

  onClick() {
    const { questionList, queryList } = this.state;
    this.setState({
      questionList: queryList.slice(0, questionList.length + 2),
    });
  }

  changeHandler(e) {
    const query = e.target.value;
    const { fullQuestionList } = this.state;
    let questionList = [];
    let queryList = [];
    this.setState({ query }, () => {
      if (query.length < 3) {
        queryList = fullQuestionList;
        questionList = queryList.slice(0, 4);
        this.setState({ questionList, queryList });
      } else {
        for (const question of fullQuestionList) {
          if (question.question_body.toLowerCase().includes(query.toLowerCase())) {
            queryList.push(question);
          }
        }
        questionList = queryList.slice(0, 4);
        this.setState({ questionList, queryList });
      }
    });
  }

  render() {
    const { questionList, query, queryList } = this.state;
    const qaHeading = 'QUESTIONS & ANSWERS';

    return (
      <div id="qacontainer">
        <div id="qaheading">{qaHeading}</div>
        <div className="searchbarwrapper">
          <input className="search" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={query} onChange={this.changeHandler} />
          <img className="search-icon" alt="" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
        </div>
        <Questions questions={questionList} fullList={queryList} onClick={this.onClick} />
      </div>
    );
  }
}

export default QnA;
