import React from 'react'

function Header(){
    return(
        <header className = 'header'>
            <strong><h2><a href= '/'>CSG</a></h2></strong>
            <ul>
                <li><a href = 'Guide.html'>Guide</a></li>
                <li><a href = 'Stock.html'>Stock</a></li>
                <li><a href = 'Board.html'>Board</a></li>
            </ul>
        </header>
    )
}

export default Header