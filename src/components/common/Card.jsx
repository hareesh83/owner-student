import React from 'react'

const Card = () => {
  const apiData=[
    {name:'pramod'},
    {Job:'Dev'}
  ]
  return (
    <div>
      <h1 style={{padding: '50px 0 0 50px', fontSize: '32px'}}>{apiData.name}</h1>
    <div class="service_wrapper">
    <div class="service_card_wrapper">
      <div class="pic"></div>
      <p class="card_header">
        Product Name1
      </p>
      <p class="card_content">Price : $199</p>
      <p class="card_content">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <a href="Pages/login.html">
        <div class="card_readmore"><b>Buy Now</b> <i class="fas fa-angle-right"></i></div>
      </a>
    </div>
    </div>
    </div>
  )
}

export default Card