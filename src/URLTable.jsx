import React from 'react';

function URLRow({url}) {

    return (
        <tr>
            <td>{url.id}</td>
            <td>{url.long_url}</td>
            <td><a href={url.long_url}>{url.short_url}</a></td>
        </tr>
    )
}

export default function URLTable({urlList}) {

    // console.log(urlList);
    const urlRows = Array.from(urlList, url => <URLRow key={url.id} url={url} />);
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Long URL</th>
                    <th>Short URL</th>
                </tr>
                {urlRows}
            </thead>
        </table>
    )
}