import React, { Component } from 'react'

const Plant = ({plant}) => {
        return (
            <div>
                <ul><li>
                    {plant.scientific_name} - {plant.usda_name}
                    {plant.family.name}
                    </li></ul>
            </div>
        )
    }

export default Plant
