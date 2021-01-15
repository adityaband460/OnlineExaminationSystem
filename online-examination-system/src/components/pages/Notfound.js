import React, { Component } from 'react'
import "./NotFound.css";

export class Notfound extends Component {
    render() {
        return (
            <div class='notfound'>
                <h1 class='heading'>Oh No!! <br/>Something's Wrong.</h1>
                <h1 class='text'>We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at support@kaps.in</h1>
            </div>
        )
    }
}

export default Notfound
