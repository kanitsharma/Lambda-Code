import React from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/merbivore';

const Editor=props => {

  return(
    <AceEditor
      className="AceEditor"
      width="100%"
      mode="javascript"
      theme="merbivore"
      fontSize={20}
      value={props.value}
      onChange={props.onchange}
      enableLiveAutocompletion={true}
      enableBasicAutocompletion={true}
      editorProps={{$blockScrolling: true}}
    />
  )
}

export default Editor;
