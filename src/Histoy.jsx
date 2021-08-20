import React from 'react';
import URLTable from './URLTable.jsx';
import graphQLFetch from '../graphQLFetch.js';

export default class History extends React.Component {

    constructor() {
        super();
        this.state = {
            urlList: []
        }
    }

    async loadData() {
        const data = await graphQLFetch(`query {getList {id long_url short_url}}`);
        // console.log(data.data.getList);
        this.setState({
            urlList: data.data.getList
        })
    }

    componentDidMount() {
        this.loadData();
    }

    render() {

        return (
            <div className='table-top-level-container'>
                <URLTable urlList={this.state.urlList}/>
            </div>
        )
    }
}