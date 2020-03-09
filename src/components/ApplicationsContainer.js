import React, { Component } from "react";
import AppsSection from "./AppsSection";

class ApplicationsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseRecords: []
    };
  }

  // componentDidUpdate() {
  //   this.handleSearch();
  // }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch() {
    let root = process.env.NODE_ENV === 'development' ? "http://localhost:9483" : "https://mfarmer5102-api-flask.herokuapp.com";
    let url = root + "/AppGalleryLite/api/applications";
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          databaseRecords: response
        });
      });
  }

  render() {
    //Prep
    var allItems = this.state.databaseRecords;
    var activeKeywords = this.props.activeKeywords;
    var queriedApps = allItems.filter(function(item) {
      let litmus = true;
      for (let i = 0; i < activeKeywords.length; i++) {
        if (item.keywords.includes(activeKeywords[i])) {
        } else {
          litmus = false;
        }
      }
      return litmus;
    });

    //Render
    return (
      <div>
        <AppsSection sectionName="Queried Apps" data={queriedApps} resultCount={queriedApps.length}/>
      </div>
    );
  }
}

export default ApplicationsContainer;