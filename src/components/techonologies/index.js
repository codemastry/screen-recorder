import React from "react";

export default class Technologies extends React.Component {
    render() {
        return (
            <div style={{ maxWidth: 700, margin: '0 auto' }}>
                <h2>Built with:</h2>
                <ul>
                    <li><a href="https://nextjs.org/">NextJs</a></li>
                    <li><a href="https://reactjs.org/">ReactJs</a></li>
                    <li><a href="https://nodejs.org/">NodeJs</a></li>
                    <li><a href="https://webrtc.org/">WebRtc</a></li>
                    <li><a href="https://react-bootstrap.github.io/">React-Bootstrap</a></li>
                </ul>
            </div>
        )
    }
}