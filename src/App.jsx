import React, { useState } from 'react'
import './App.css'
import Game from './Games/Game'
import Result from './Games/Result'

const question = [
	{
		title: 'Երբ է ընդունվել քրիստոնեությունը?',
		variants: ['301թ', '451թ', '869թ'],
		correct: 0,
	},
	{
		title: 'Երբ է տեղի ունեցել Ավարայրի ճակատամարտը?',
		variants: ['301թ', '451թ', '869թ'],
		correct: 1,
	},
	{
		title: 'Երբ է սկսել 2-րդ համաշխարհային պատերազմը?',
		variants: ['1992թ', '1915թ', '1939թ'],
		correct: 2,
	},
	{
		title: 'Որն է Հայաստանի ամենաբարձր լեռը?',
		variants: ['Արարատ', 'Արագած', 'Խուստուփ'],
		correct: 0,
	},
	{
		title: 'Հայաստանի պատմական մայրաքաղաքներ քանիսն են?',
		variants: ['21', '12', '8'],
		correct: 1,
	},
	{
		title: 'Որքան է Սևան լճի մակերեսը?',
		variants: ['1242 կմ/քառ․', '206 կմ/քառ․', '28800 կմ/քառ․'],
		correct: 0,
	},
	{
		title: 'Ով է Հայաստանի 1-ին հանրապետության վարչապետը?',
		variants: ['Վազգեն Սարգսյան', 'Նիկոլ Փաշինյան', 'Հովհաննես Քաջազնունի'],
		correct: 2,
	},
	{
		title: 'Ում են կոչել ամենայն Հայոց բանաստեղծ?',
		variants: ['Նարդոս', 'Եղիշե Չարենց', 'Հովհաննես Թումանյան'],
		correct: 2,
	},
	{
		title: 'Որն է Հայաստանի ամենաերկար գետը?',
		variants: ['Հրազդան', 'Ախուրյանն', 'Ազատ'],
		correct: 1,
	},
	{
		title: 'Որ պետությունն է Հայաստանի հյուսիսային հարըանը?',
		variants: ['Թուրքիա', 'Իրան', 'Վրաստան'],
		correct: 2,
	},
	{
		title: 'Որ թվականին է տեղի ունեցել Մեծ եղեռնը?',
		variants: ['1915թ', '1815թ', '1939թ'],
		correct: 0,
	}
]

export default function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)

	const questi = question[step] 

	const onClickVariant = (index) => {
		console.log(step, index)
		setStep(step + 1)
		if(index === questi.correct) {
			setCorrect(correct + 1)
		}
	}
  return (
	<div className='app'>
	{step !== question.length ? 
	(<Game 
	questi={questi} 
	onClickVariant={onClickVariant}/>) : 
	(<Result question={question} correct={correct}/>)}
	</div>
  )
}
