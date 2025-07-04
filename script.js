const cardsArray=[
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'otter',
        icon:'<i class="fa-solid fa-otter"></i>'
    },
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'cow',
        icon:'<i class="fa-solid fa-cow"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'dragon',
        icon:'<i class="fa-solid fa-dragon"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'otter',
        icon:'<i class="fa-solid fa-otter"></i>'
    },
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'cow',
        icon:'<i class="fa-solid fa-cow"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'dragon',
        icon:'<i class="fa-solid fa-dragon"></i>'
    }
    
    
];

let flippedCards=[];
let matchedPairs = 0;
shuffleCards();
const gameBoard = document.getElementById("gameBoard")
const button = document.getElementById('restart-btn')
displayCards();


function shuffleCards(){
    for(i=cardsArray.length-1; i>=0; i--)
        {
        const randIndex = Math.floor(Math.random() * (i + 1));
        [cardsArray[i],cardsArray[randIndex]] = [cardsArray[randIndex],cardsArray[i]]
        }
    
}

function displayCards(){
      cardsArray.forEach((current,index,array)=>
        {
          
        const card = document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardBack');
        card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click',flipCard);

        

        }
    )
}

function flipCard(){
    if(flippedCards.length < 2 && this.classList.contains('active'))
        {
    
            let cardId=this.getAttribute('id');
            flippedCards.push(this);
            this.classList.remove('cardBack');
            this.innerHTML=cardsArray[cardId].icon;
            if(flippedCards.length == 2){
               setTimeout(checkMatch,1000)
               
            }
            
        }
        
}

function checkMatch(){
    const card1Id=flippedCards[0].getAttribute('id');
    const card2Id=flippedCards[1].getAttribute('id');
    if(cardsArray[card1Id].name === cardsArray[card2Id].name)
        {
              flippedCards[0].style.border = 'none';
              flippedCards[0].style.backgroundColor="#f5e8ba";
              flippedCards[0].innerHTML = '';
              flippedCards[0].classList.remove('active');
              flippedCards[1].style.border = 'none';
              flippedCards[1].style.backgroundColor="#f5e8ba";
              flippedCards[1].innerHTML = '';
              flippedCards[1].classList.remove('active');
              matchedPairs++;
              checkGameOver();
             

        }else{
            flippedCards[0].innerHTML='';
            flippedCards[0].classList.add('cardBack');
            flippedCards[1].innerHTML='';
            flippedCards[1].classList.add('cardBack');

        }
flippedCards=[];
  
}
function checkGameOver(){
    if(matchedPairs == cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild);
        }
        gameBoard.innerHTML='YOU WON' ;
        gameBoard.classList.remove('game');
        gameBoard.classList.add('won');
        button.style.display='block';
        
        
        
    }
}

function restart(){
    gameBoard.innerHTML = '';               
    matchedPairs = 0;                       
    flippedCards = [];                      
    shuffleCards();                         
    displayCards(); 
    gameBoard.classList.remove('won');
    gameBoard.className = 'game';
    button.style.display = 'none'
}