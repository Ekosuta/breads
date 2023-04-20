const React = require('react')
const Default = require ('./layouts/default')

function error404() {
    return(
        <Default>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops! Sorry, we couldn't find this page.</p>
            <p>Click <a href="/">here</a> to go home, or press BreadCRUD above to check out some of our breads!</p>
        </Default>
    )
}

module.exports = error404