// import React from "react";
// import { connect } from 'react-redux';
// const Settings = props => <div> <h1>Settings</h1> </div>
//
// export default Settings;


// componentDidMount() {
//   this.node = ReactDOM.findDOMNode(this);
//   console.log(this.node)
// }
//
// componentDidUpdate() {
//   this.node.innerHTML = this.props.value;
//   console.log(this.props.value)
// }
require("./css/Draft.css");
require("./css/RichEditor.css");
import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Editor, EditorState, RichUtils} from 'draft-js';
import BlockStyleControls from './editor/BlockStyleControls';
import InlineStyleControls from './editor/InlineStyleControls';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }

  _handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  render() {
    const {editorState} = this.state;
    console.log(this.state);

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <div>
        <br /><br /><br /><br />
        <div className="RichEditor-root">
          <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
          <InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle} />
          <div className={className} onClick={this.focus}>
            <Editor blockStyleFn={getBlockStyle} customStyleMap={styleMap} editorState={editorState}
              handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} placeholder="Tell a story..."
              ref="editor" spellCheck={true}/>
          </div>
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

function mapStateToProps(state) {
	return state;
}
export default connect(mapStateToProps)(Settings);
