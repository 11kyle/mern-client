import React from 'react';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Code(props) {
    
    return (
        <SyntaxHighlighter 
            language={props.language} 
            style={tomorrow}
            children={props.children}
            customStyle={{"borderRadius": "4px"}}
        >
            
        </SyntaxHighlighter>
    );
}