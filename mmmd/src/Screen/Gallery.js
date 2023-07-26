import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Header from '../Components/Header'
import "./Home.css"

export default function Gallery() {
    
  return (
    <div className='main_body'>
        <Header />
        <div>
            <h1 className='main_head text-center'>Meri Mati Mera Desh</h1>
            <p className='sub_head text-center'>Shaheedon ko Naman Desh ko Arpan</p>
        </div>

        <div className='container'>
            <div className='row'>
                { <div className='col col-sm-6'>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src="./asset/images/gallery.jpg" />
                    <Card.Body>
                        <Card.Title>Name : Vineet Sharma</Card.Title>
                        <Card.Text>
                        Agota, Buland Shaher, Uttar Pradesh
                        </Card.Text>
                        <Card.Text>
                        Caption : Agota is a town and a Gram panchayat ... More info 
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>}
            </div>
        </div>
    </div>
  )
}
