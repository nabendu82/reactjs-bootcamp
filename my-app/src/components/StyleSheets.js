import React from 'react'
import './stylesheets.css'

const paraStyle = {
    color: 'red',
    fontSize: '20px',
    backgroundColor: 'yellow'
}

const StyleSheets = () => {
    return (
        <>
            <h1 className="primary">CSS StyleSheets</h1>
            <p className="secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quis alias nesciunt incidunt vero dicta quod eos tenetur reiciendis magnam.</p>
            <p style={paraStyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eius dolorem similique itaque tenetur quibusdam, cumque voluptates quasi deleniti excepturi? Facere nostrum laborum ex consequuntur iure atque, accusantium tempora labore?</p>
            <p style={{ color: 'green', backgroundColor: 'grey', fontWeight: 'bold'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus deserunt est numquam nemo soluta adipisci exercitationem, repudiandae aut quam, corrupti .</p>
        </>
    )
}

export default StyleSheets
