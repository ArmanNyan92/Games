import React from 'react'
import './Game.css'

export default function Game({questi, onClickVariant }) {
  return (
	<div className='game'>
		<h2 className='h2'>{questi.title}</h2>
		<ul>
			{questi.variants.map((tesx, index) => <li className='li-harc' key={index} onClick={() => onClickVariant(index)}>{tesx}</li>)}
		</ul>
	</div>
  )
}
