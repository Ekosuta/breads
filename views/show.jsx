const React = require('react')
const Default = require('./layouts/default')

function Show({bread}) {
    //console.log(bread.name)
    return(
        <Default>
            <h3>{bread.name}</h3>
            <p>
                and it
                {
                    bread.hasGluten 
                    ? <span> does </span>
                    : <span> does NOT </span>
                }
                have gluten.
            </p>
            <img src={bread.image} alt={bread.name}/>
            <p>{bread.getBakedBy()}</p>
            <form action={`/breads/${bread.id}?_method=DELETE`} method='POST'>
                        <input type="submit" value="DELETE"/>
            </form>
            <div className='row'>
                <div className='col'>
                    <a href={`/breads/${bread.id}/edit`} className='row'><button>Edit</button></a>
                </div>
                <div className='col'>
                    <a href="/breads" className='row'><button>Go Home</button></a>
                </div>
            </div>
        </Default>
    )
}

module.exports = Show