import React, { useState } from "react"
import { TextField } from '@material-ui/core';
import { pushMessage } from "../firebase"

const MessageField = ({setText, text, name}) => {
  const [isComposed, setIsComposed] = useState(false)

  return <TextField fullWidth={true}
    value={text}
    onChange={ e => setText(e.target.value)}
    onKeyDown={(e) => {
      if(isComposed) return

      const text = e.target.value;
      if(text === '') return

      if(e.key === 'Enter'){
        pushMessage({name: "いのうえ", text})
        setText('')
        e.preventDefault()
      }
    }}
    onCompositionStart={() => setIsComposed(true)}
    onCompositionEnd={() => setIsComposed(false)}
  />
}

export default MessageField;
