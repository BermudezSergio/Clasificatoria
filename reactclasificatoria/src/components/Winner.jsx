import React from 'react'

export default function Winner({winnerPlayer}) {


  
  return (

 
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
      
      
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="Winners.jpeg" class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5><b>Enhorabuena a todos los ganadores</b></h5>
            
          </div>
        </div>

        {winnerPlayer.map((player)=> (
              
              
            <div class="carousel-item " data-bs-interval="3000">
              <img src={player+".jpeg"} class="d-block w-100" alt={player+".jpeg"}/>
              <div class="carousel-caption d-none d-md-block">

                <div class="card-body bg-light">
                  <h5 class="card-title text-center">{player}</h5>
                  <p class="card-text">
                    WINNER
                  </p>
                 </div>
   
              </div>
            </div>
                
          

          ))}

    
        
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>

  )



}
