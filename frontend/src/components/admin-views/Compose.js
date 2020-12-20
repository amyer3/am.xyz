import React, { useEffect, useMemo, useState } from 'react'
// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'


export default function Compose(props) {
    const editor = useMemo(() => withReact(createEditor()), [])
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])

    return (
        <div>
            <div class="css-1d8w8c2">
                <span class="css-1vdn1ty">
                    <span class="material-icons css-583gqu">format_bold</span>
                </span>
                <span class="css-1vdn1ty">
                    <span class="material-icons css-583gqu">format_italic</span>
                </span>
                <span class="css-1vdn1ty">
                    <span class="material-icons css-583gqu">format_underlined</span>
                </span>
                <span class="css-1vdn1ty">
                    <span class="material-icons css-583gqu">code</span>
                </span>
                <span class="css-1vdn1ty">
                    <span class="material-icons css-583gqu">looks_one</span>
                </span>
                <span class="css-1vdn1ty"><span class="material-icons css-583gqu">looks_two</span></span>
                <span class="css-1vdn1ty">
                    <span class="material-icons css-583gqu">format_quote</span></span>
                <span class="css-vbnk1l"><span class="material-icons css-583gqu">format_list_numbered</span></span>
                <span class="css-1vdn1ty"><span class="material-icons css-583gqu">format_list_bulleted</span></span>
            </div>
            <Slate editor={editor} value={value} onChange={newValue => setValue(newValue)}>
                <Editable />
            </Slate>
        </div>
    )
}
