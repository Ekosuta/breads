const React = require('react')
const Default = require('./layouts/default')
const { link } = require('fs')

function Index({breads, title, bakers}) {
    return(
        <Default title={title}>
            <h2>Index Page</h2>
            <h3>Bakers</h3>
            <ul>
                {
                    bakers.map((baker) => {
                        return (
                            <li id="index-names" key={baker.id}>
                                <a href={`/bakers/${baker.id}`}>{baker.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <h3>Breads</h3>
            <ul>
                {
                    breads.map((bread) => {
                        return (
                            <li id="index-names" key={bread.id}>
                                <a href={`/breads/${bread.id}`}>{bread.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="newButton">
                <a href="/breads/new"><button>Add a new bread</button></a>
            </div>
        </Default>
    )
}

module.exports = Index