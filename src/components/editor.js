import React from 'react';
import AceEditor from 'react-ace';
import 'brace/ext/language_tools'
import 'brace/mode/javascript';
import 'brace/theme/merbivore';
import 'brace/theme/ambiance';
import 'brace/theme/chaos';
import 'brace/theme/monokai';
import 'brace/theme/cobalt';
import 'brace/theme/clouds';
import 'brace/theme/chrome';
import 'brace/theme/dawn';
import 'brace/theme/dreamweaver';
import 'brace/theme/iplastic';
import 'brace/theme/terminal';
import 'brace/theme/tomorrow';
import 'brace/theme/solarized_dark';
import 'brace/theme/solarized_light';

const Editor=props => {
  return(
    <AceEditor
      className="AceEditor"
      width="100%"
      mode="javascript"
      theme={props.theme}
      fontSize={20}
      value={props.value}
      onChange={props.onchange}
      focus={true}
      enableLiveAutocompletion={true}
      enableBasicAutocompletion={true}
      editorProps={{$blockScrolling: true}}
      wrapEnabled={true}
    />
  )
}

export default Editor;
