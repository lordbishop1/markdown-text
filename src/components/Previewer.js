import React from 'react';
import marked from 'marked';


export default class Previewer extends React.Component {

    render() {
        return (
            <div id="previewer-wrapper">
                <div className="title">
                    <h5>
                        <i className="fab fa-free-code-camp"></i> Previewer
                    </h5>
                    <a onClick={this.props.onClick} href="#previewer-wrapper"><i style={{fontSize:"large",marginRight:5,marginTop:2}} className="fas fa-expand-arrows-alt"></i></a>
                </div>
                <div className="body">
                    
                    <div id="preview-text" dangerouslySetInnerHTML={{ __html: marked(this.props.previewText) }}></div>


                </div>
            </div>
        );
    }
}