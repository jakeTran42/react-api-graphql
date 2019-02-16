import React, { Component } from 'react';
import Fetch from './Fetch';

class Resolve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NumOfAPI: 5,
            apis: ['chuck-joke', 'weather', 'articles', 'animes', 'advice'],
        };
    }

    render() {

        let api

        if(this.state.NumOfAPI > this.state.apis.length) {
            api = <div>This exceeds the amount of API we currently have...{this.state.apis.length}</div>
        } else {
            api = this.state.apis.slice(0, this.state.NumOfAPI).map((identifier) => {
                return <Fetch total={this.state.NumOfAPI} identifier={identifier} />
            })
        }

        return (
            <div>
                <label>Num of API to fetch: </label>
                <input type="number" value={this.state.NumOfAPI} onChange={e => this.setState({NumOfAPI: e.target.value})} />

                <div><br /></div>

                {api}

            </div>
        )
    }
}

export default Resolve