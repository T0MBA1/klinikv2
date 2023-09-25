import React, { Fragment } from 'react';

export function P(props){
    return(
      <Fragment>
        {props.innerHtml ? <p dangerouslySetInnerHTML={{ __html:props.innerHtml }} />
       : ''}
        <p {...props.attrPara} >{props.children}</p>
      </Fragment>
    );
};