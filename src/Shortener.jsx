import React from 'react';
import graphQLFetch from '../graphQLFetch.js'

export default class Shortener extends React.Component {

    constructor() {
        super();
        this.state = {
            shortUrl: "Short Url will appear here"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const form = document.forms['url-form'];
        const longUrl = form.longUrlInput.value;
        // console.log(`The long urs is : ${longUrl}`);
        const query = `mutation short($longUrl: String!) {
            short(long_url: $longUrl)
        }`
        const varible = {
            longUrl
        }
        
        const data = await graphQLFetch(query, varible)
        // console.log(data);
        console.log('The shortned url is: ', data.data.short);
        this.setState({
            shortUrl: data.data.short
        })
        form.reset();
    }

    render() {
        return (
            <div className='shortener-container'>
                <div className='form-container'>
                    <form id='url-form' name='url-form' onSubmit={this.handleSubmit}>
                        <label htmlFor="longUrlInput">
                            <input name="longUrlInput" id="longUrlInput" placeholder="Type url here" type="text" />
                        </label>
                        <button id='shrink-btn' type='submit'>Shrink</button>
                    </form>
                </div>
                <div className='output-container'>
                    <code className='output'><a href={`http://localhost:3000/go/${this.state.shortUrl}`}>{this.state.shortUrl}</a></code>
                </div>
            </div>
        )
    }
}