import React, { Component } from 'react'
import './App.css'
import Bodybox from './components/Bodybox'
import Logo1 from './ramayan.jpg'
import Logo2 from './mahabharat.jpg'
import Logo3 from './geeta.png'
import Logo4 from './srimad-bhagwat.jpg'
import Logo5 from './kalkipurana.jpg'
import Logo6 from './vishnupurana.jpg'
import Logo7 from './garudapurana.jpg'
import Logo8 from './shivpurana.jpg'
import Logo9 from './rigveda.jpg'
import Logo10 from './samveda.jpg'
import Logo11 from './yajurveda.jpg'
import Logo12 from './atharvveda.jpg'
import Logo13 from './matasyapurana.jpg'
import Logo14 from './agnipurana.jpg'
export class App extends Component {
  render() {
    const books = [
        {
            id: '0',
            name: 'The Ramayana',
            logo: Logo1,
            discription: "The epic, traditionally ascribed to the Maharshi Valmiki, narrates the life of Ram, the legendary prince of the Koshal Kingdom. It follows his fourteen-year exile to the forest by his father King Dasharatha, on request of his step-mother Kaikeyi. His travels across forests in India with his wife Seeta and brother Lakshman, the kidnapping of his wife by Ravana, the great king of Lanka, resulting in a war with him, and Ram's eventual return to Ayodhya to be crowned king is the crux of the epic.......",
            wikipedia: 'https://en.wikipedia.org/wiki/Ramayana'
        },
        {
            id: '1',
            name: 'The Shremad Bhagwat',
            logo: Logo4,
            discription: "Originally composed in Sanskrit, this most studied, popular, revered, and influential Purana is an epic Vaishnava poem consisting of 18,000 shlokas (or verses) over 12 skandhas (or cantos). Its interconnected and interwoven narratives, teachings, and explanations focus on the forms (or avatars) of Vishnu particularly Krishna as the ultimate, primeval, transcendental source of the multiverse (including the demigods and gods such as Vishnu)  as well as the lives of his greatest devotees.......",
            wikipedia: 'https://en.wikipedia.org/wiki/Bhagavata_Purana'
        },
        {
            id: '2',
            name: 'The Geeta',
            logo: Logo3,
            discription: ""
        },
        {
            id: '3',
            name: 'The Mahabharat',
            logo: Logo2,
            discription: ""
        },
        {
            id: '4',
            name: 'Kalki Purana',
            logo: Logo5,
            discription: ""
        },
        {
            id: '5',
            name: 'Vishnu Purana',
            logo: Logo6,
            discription: ""
        },
        {
            id: '6',
            name: 'Garuda Purana',
            logo: Logo7,
            discription: ""
        },
        {
            id: '7',
            name: 'Shiv Purana',
            logo: Logo8,
            discription: ""
        },
        {
            id: '8',
            name: 'Rig Veda',
            logo: Logo9,
            discription: ""
        },
        {
            id: '9',
            name: 'Saam Veda',
            logo: Logo10,
            discription: ""
        },
        {
            id: '10',
            name: 'Yajur Veda',
            logo: Logo11,
            discription: ""
        },
        {
            id: '11',
            name: 'Atharv Veda',
            logo: Logo12,
            discription: ""
        },
        {
            id: '12',
            name: 'Matasya Purana',
            logo: Logo13,
            discription: ""
        },
        {
            id: '13',
            name: 'Agni Purana',
            logo: Logo14,
            discription: ""
        },
    ]
    return (
      <div className="app-container">
        <Bodybox books ={books}/>
      </div>
    )
  }
}

export default App
