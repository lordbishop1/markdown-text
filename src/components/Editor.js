import React from 'react';

export default class Editor extends React.Component {

    render() {
        console.log(this.props.maximize)
        return (
            <div id="editor-wrapper" style={this.props.maximize?{height:"80vh"}:null}>
                <div className="title">
                    
                    <h5 >
                    <i className="fab fa-free-code-camp"></i> Editor
                    </h5>
                    <a id="editor-link" href="#editor-wrapper" onClick={this.props.onClick} ><i style={{fontSize:"large",marginRight:5,marginTop:2}} className="fas fa-expand-arrows-alt"></i></a>
                </div>
                <div className="body">
                    <textarea className="text-canvas" id="editor" value={this.props.areaInput} onChange={this.props.handleAreaInput}>
                    </textarea>
                </div>
            </div>
        );
    }
}
