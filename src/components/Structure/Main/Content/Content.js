import React, { Component } from "react";

import CardDeck from "./CardDeck/CardDeck";

const style = {
    Content: {
        overflow: "scroll",
        maxHeight: "100vh"
    }
}

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="col-xl-10 col-lg-9 col-md-8 col-sm-6 p-4" style={style.Content}>
                <CardDeck
                    allApplications={this.props.allApplications}
                    selectedKeywords={this.props.selectedKeywords}
                    selectedFlags={this.props.selectedFlags}
                />
            </div>
        )  
    }

}

export default Content;
