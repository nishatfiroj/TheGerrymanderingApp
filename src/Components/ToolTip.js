import React, { Component } from "react";
import {Overlay, Tooltip} from "react-bootstrap";

export default class ToolTip extends Component {
    render(props) {
        return (
            <React.Fragment>
                <Tooltip id="button-tooltip" {...props}>
                    Simple tooltip
                </Tooltip>
            </React.Fragment>
        );
    }
}