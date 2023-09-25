import React from 'react';
import { Button } from 'reactstrap';

export function Btn(props) {
    return <Button {...props.attrBtn}>{props.children}</Button>;
};