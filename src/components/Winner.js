
import React, { useState } from 'react'

export const Winner = ({numbers}) => {
    if (!numbers.every(el => el.value === el.index + 1)) return null
    else return <div className="winner">
        <p>Glückwunsch!</p>
        <p>Sie haben gewonnen!</p>
    </div>

}