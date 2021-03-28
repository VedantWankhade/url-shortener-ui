import React from 'react';
import graphQLFetch from '../graphQLFetch.js'

export default class Shortener extends React.Component {

    constructor() {
        super();
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
        form.reset();
    }

    render() {
        return (
            <div className='shortener-container'>
                <div className='form-container'>
                    <form name='url-form' onSubmit={this.handleSubmit}>
                        <label htmlFor="longUrlInput">
                            <input name="longUrlInput" id="longUrlInput" placeholder="Type url here" type="text" />
                        </label>
                        <button type='submit'>Shrink</button>
                    </form>
                </div>
                <div className='output-container'>
                    <code className='output'>Short url will apear here</code>
                </div>
            </div>
        )
    }
}