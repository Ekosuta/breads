const React = require('react')
const Default = require('./layouts/default')
const { link } = require('fs')

function Index({breads, title}) {
    return(
        <Default title={title}>
            <h2>Index Page</h2>
            {/*<p>I have {breads[0].name} bread!</p>*/}
            <ul>
                {
                    breads.map((bread, index) => {
                        return (<li id="bread-names" key={bread.id}>
                            <a href={`/breads/${bread.id}`}>
                            {bread.name}
                            </a>
                                <li id="baked">
                                    {bread.getBakedBy()}
                                </li>
                        </li>)
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