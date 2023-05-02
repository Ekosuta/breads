const React = require('react')
const Default = require ('./layouts/default')

function error404() {
    return(
        <Default>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops! Sorry, we couldn't find this page.</p>
            <p>Click <b>BreadCRUD</b> above to head back to the Index Page!</p>
        </Default>
    )
}

module.exports = error404