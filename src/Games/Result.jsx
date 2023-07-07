import React from 'react'
import './Result.css'

export default function Result({correct, question}) {
  return (
	<div className='result'>
		<img className='img' width='150px' src="./img/ha.jpg" alt="" />
		<h4 className='h4'>{`Ճիշտ եք պատասխանել ${question.length} հարցից ${correct}-ին`}</h4>
		<a href="/">
			<button className='button'>Փորձել նորից</button>
		</a>
	</div>
  )
}
