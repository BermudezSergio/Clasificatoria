
import './App.css';
import axios from 'axios';
import React, {useState, Fragment, useEffect } from 'react';
import PlayerList from './components/PlayerList';
import PlayerMatch from './components/PlayerMatch';
import Winner from './components/Winner';


var totalPlayers=0;

function App() {


  //const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  //const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

  const [listMatch, setlistMatch] = useState([]);
  const [listaPlayers, setListaPlayers] = useState([]);
  const [winnerList,setWinnerList]= useState([]);
  const [winnerListPlayers,setWinnerListPlayers]= useState([]);




  
  useEffect(()=> {
    
    document.getElementById('matchPlays').style.display = 'none';
    document.getElementById('listPlayers').style.display = 'block';
    document.getElementById('carrousel').style.display = 'none';
    

    handleLoadData();

  },[]); 
  



  const handleLoadData = () =>{

    axios({

      method: 'get',
      url: "https://jsonplaceholder.typicode.com/users"

    }).then(function(response){

        copyPlayer(response.data);

    });


  };


  const cas = () =>{

    alert("car");

  };


  const copyPlayer = (data) =>{
    totalPlayers=0;
    const newPlayers = data.map(function(newPlayer){

      totalPlayers++;
      return {id: totalPlayers, name: newPlayer.name};

    });

    setListaPlayers(newPlayers);

  };


  const mezclarPlayers = () =>{

    setlistMatch(listaPlayers);
  
    var aux=null;
    for(var i=0; i<10; i++){

      var rand=Math.floor(Math.random() * 10);
      
      aux=listaPlayers[i];
      listaPlayers[i]=listaPlayers[rand];
      listaPlayers[rand]=aux;
      
    }

    var aux=0;
    for(var i=0; i<5; i++){

        listMatch[i]=[{id: listaPlayers[i]['id'], name: listaPlayers[i]['name']},{id: listaPlayers[i+4]['id'], name: listaPlayers[i+4]['name']}];
      
    }

    

    

    document.getElementById('listPlayers').style.display='none';
    document.getElementById('matchPlays').style.display = 'block';
    document.getElementById('carrousel').style.display = 'none';
    
  };


  const finalizarJornada = () => {


    document.getElementById('matchPlays').style.display = 'none';
    document.getElementById('listPlayers').style.display = 'none';
    document.getElementById('carrousel').style.display = 'block';

    for(var i= 1; i<=5; i++){

        
        winnerList.push(document.getElementById('winner'+i).value);

    }

    
    getWinner();


  }

  const getWinner = () => {

      const task=[];
      for(let i=0;i<5; i++){
        for(let b=0;b<10; b++){
            if(winnerList[i]==listaPlayers[b]['id']){
              task.push(listaPlayers[b]['name']);
             
            }
        }

        
      }
     
      setWinnerListPlayers(task);

  }

 //<PlayerMatch id='1' players={listMatch}></PlayerMatch>
  return (
    <Fragment>



      <div id='listPlayers' className='container mt-5'>
        
        <PlayerList id='1' players={listaPlayers}></PlayerList>
    
        <button onClick={mezclarPlayers} type="button" class="btn btn-secondary" >Mezclar</button>

      </div>

      <div id='matchPlays' className='container mt-5'>
        

          <table class="table table-dark table-striped">
            <thead>
            <tr>
                  <td><b>#</b></td>
                  <td><b>Player 1</b></td>
                  <td><b>Player 2</b></td>
                  <td><b>Winner</b></td>
                </tr>  
            </thead>        

            <PlayerMatch players={listMatch} cas={cas}></PlayerMatch>    

            


          </table>
         
          <button onClick={finalizarJornada} type="button" class="btn btn-secondary">Finalizar Jornada</button>


      </div>

      <div id='carrousel' className='container mt-5'>
          
    
          <Winner winnerPlayer={winnerListPlayers}></Winner>

      </div>


    </Fragment>
  );
}

export default App;
