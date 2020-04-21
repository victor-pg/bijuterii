const brose = [
    {
        id:0,
        name:'9.5 - 10.0mm Cultured Freshwater Pearl',
        imgUrl:'../img/brooches/0.jpg',
        price:'$299'
    },
    {
        id:1,
        name:'1/4 CT. T.W. Diamond Lizard Brooch in',
        imgUrl:'../img/brooches/1.webp',
        price:'$825.30'
    }
]

const cards = document.querySelector('.cards');
let cardIds=[];
for(let i=0;i<brose.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${brose[i].imgUrl}`);
	if(i===0){
	img.setAttribute('class','for-redirect1 standart-img-size');
	}
	if(i===1){
		img.setAttribute('class','for-redirect2 standart-img-size');		
	}
	let textBlock = document.createElement('div');
	textBlock.setAttribute('class','card-text-block');
	let text = document.createElement('div');
	let ringName = document.createElement('h3');
	ringName.innerHTML=brose[i].name;
	let price = document.createElement('p');
	price.innerHTML=brose[i].price;
	let icon = document.createElement('img');
	icon.setAttribute('src','../img/icons/addToCart.png');
	icon.setAttribute('class','productCercei')
	icon.setAttribute('earringId',`${brose[i].id}`);
	icon.style.margin=0;
	
	icon.onclick=function(){
		cardIds.push(brose[i].id);
		localStorage.setItem('cosBrose',JSON.stringify(cardIds))
	}

	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	cards.appendChild(card);
}

const forRedirect1 = document.querySelector('.for-redirect1');
const forRedirect2 = document.querySelector('.for-redirect2');

forRedirect1.onclick=()=>{
	window.location.href='../pages/details/detail1.html';
}
forRedirect2.onclick=()=>{
	window.location.href='../pages/details/detail2.html';
}