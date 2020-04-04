import React, { Component } from "react";

const style = {
    AppThumbnail: {
        height: "200px",
        maxWidth: "100%"
    }
}
class ApplicationCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
            activeClass: "col-xl-4 col-lg-6"
        };
        this.activateHover = this.activateHover.bind(this);
        this.deactivateHover = this.deactivateHover.bind(this);
    }

    activateHover() {
        this.setState({
            isHovered: true,
            activeClass: "animated pulse col-xl-4 col-lg-6"
        });
    }

    deactivateHover() {
        this.setState({ isHovered: false, activeClass: "col-xl-4 col-lg-6" });
    }

    render() {

        let isAbleToBeExperienced = this.props.data.deployedLink && this.props.data.supportStatus !== 'discontinued';

        //Define indicator icons

        let featuredIndicator = this.props.data.isFeatured ? (<i title='Featured' className="float-right fas fa-star fa-lg text-warning p-1"></i>) : ("");
        let collaborationIndicator = this.props.data.isCollaboration ? (<i title='Collaboration' className="float-right fas fa-users fa-lg text-secondary p-1"></i>) : ("");
        
        let reactIndicator = this.props.data.keywords.includes('React') ? (<i title='React' className="float-right fab fa-react fa-lg text-primary p-1"></i>) : ("");
        let angularIndicator = this.props.data.keywords.includes('Angular') ? (<i title='Angular' className="float-right fab fa-angular fa-lg text-danger p-1"></i>) : ("");
        let vueIndicator = this.props.data.keywords.includes('Vue') ? (<i title='Vue' className="float-right fab fa-vuejs fa-lg text-success p-1"></i>) : ("");
        
        let nodeIndicator = this.props.data.keywords.includes('Node') ? (<i title='Node' className="float-right fab fa-node fa-lg text-secondary p-1"></i>) : ("");
        let javascriptIndicator = this.props.data.keywords.includes('JavaScript') ? (<i title='Javascript' className="float-right fab fa-js fa-lg text-warning p-1"></i>) : ("");
        let pythonIndicator = this.props.data.keywords.includes('Python') ? (<i title='Python' className="float-right fab fa-python fa-lg text-info p-1"></i>) : ("");
        let golangIndicator = this.props.data.keywords.includes('Go') ? (<i title='Go' className="float-right fa-lg text-primary p-1"><strong>GO</strong></i>) : ("");

        return (
            <div
            className={this.state.activeClass}
            onMouseEnter={this.activateHover}
            onMouseLeave={this.deactivateHover}
            >
                <div className="card shadow mb-3">

                    {/* Header */}
                    <div className="card-header text-left">
                        <h5 className="float-left">
                            {this.props && this.props.data ? this.props.data.title : null}
                        </h5>

                        {featuredIndicator}
                        {collaborationIndicator}

                        {reactIndicator}
                        {angularIndicator}
                        {vueIndicator}

                        {nodeIndicator}
                        {javascriptIndicator}
                        {pythonIndicator}
                        {golangIndicator}

                    </div>

                    {/* Body */}
                    <a 
                        target="_blank" 
                        href={isAbleToBeExperienced ? this.props.data.deployedLink : this.props.data.githubLink} 
                        className='d-flex justify-content-center bg-light'>
                            <img src={this.props.data.imagePath} style={style.AppThumbnail} />
                    </a>

                    {/* Footer */}
                    <div className="card-footer text-right">
                        <a target="_blank" href={this.props.data.deployedLink}>
                            <small>{isAbleToBeExperienced ? 'Experience' : ''}</small>
                        </a>
                        <span className='pl-2 pr-2'>{isAbleToBeExperienced ? '|' : ''}</span>
                        <a target="_blank" href={this.props.data.githubLink}>
                            <small>View Source</small>
                        </a>
                    </div>

                </div>
            </div>
        )  
    }

}

export default ApplicationCard;
