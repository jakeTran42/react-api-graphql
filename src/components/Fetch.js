import React, { Component } from 'react';
import Chuck from './Fetcher/Chuck';
import Weather from './Fetcher/Weather';
import Advice from './Fetcher/Advice';
import Anime from './Fetcher/Anime';
import Article from './Fetcher/Article';

class Resolve extends Component {


    render() {

        function fetching(identifier) {
            if (identifier === 'advice') {
                return <div>
                    <Advice /> <br />
                </div>
            } else if (identifier === 'chuck-joke') {
                return <div >
                    <Chuck /> <br />
                </div>
            } else if (identifier === 'animes') {
                return <div >
                    <Anime /> <br />
                </div>
            } else if (identifier === 'articles') {
                return <div >
                    <Article /> <br />
                </div>
            } else if (identifier === 'weather') {
                return <div >
                    <Weather /> <br />
                </div>
            }
        }

        var fetchAPI = [this.props.identifier].map((identifier) => {
            return fetching(identifier)
        })

        return (
            <div>
                {fetchAPI}
            </div>
        )
    }
}

export default Resolve