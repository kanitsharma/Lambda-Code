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
import 'brace/theme/vibrant_ink';

const Editor=props => {
  const empty = () => {
    props.empty()
  }
  return(
    <AceEditor
      className="AceEditor"
      width="100%"
      mode="javascript"
      theme={props.theme}
      fontSize={20}
      value={props.value}
      onChange={props.onchange}
      enableLiveAutocompletion={true}
      enableBasicAutocompletion={true}
      editorProps={{$blockScrolling: Infinity}}
      wrapEnabled={true}
      onFocus={empty}
      onLoad={(editor) => {
        editor.commands.addCommand({
          name: "beautify",
          bindKey: {
              sender:     /editor.+|cli/,
              mac:        "Command-b",
              win:        "Ctrl-b"
          },
          exec: function() {
            props.beautifier()
          }
        })
        editor.commands.addCommand({
          name: "execute",
          bindKey: {
              sender:     /editor.+|cli/,
              mac:        "Command-Enter",
              win:        "Ctrl-Enter"
          },
          exec: function() {
            props.execute()
          }
        })
      }}
    />
  )
}

export default Editor;
