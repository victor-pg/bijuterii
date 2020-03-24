const earrings = [
	{
		id:0,
		name:'1/10 CT. T.W. Diamond Solitaire Stud',
		imgUrl:'../img/earrings/0.webp',
		price:'$169.00'
	},
	{
		id:1,
		name:'Earrings in 14K Gold',
		imgUrl:'../img/earrings/1.webp',
		price:'$49.00'
	},
	{
		id:2,
		name:'Earrings in Sterling Silver',
		imgUrl:'../img/earrings/2.jpg',
		price:'$79.00'
	},
	{
		id:3,
		name:'Princess-Cut Diamond',
		imgUrl:'../img/earrings/3.webp',
		price:'$169.00'
	},
	{
		id:4,
		name:'White Sapphine Earrings',
		imgUrl:'../img/earrings/4.webp',
		price:'$49.00'
	},
	{
		id:5,
		name:'1/2 CT. T.W. Diamond Solitaire Stud',
		imgUrl:'../img/earrings/5.jpg',
		price:'$629.00'
	},
	{
		id:6,
		name:'3.0mm Ball Stud Earrings in 14K Gold',
		imgUrl:'../img/earrings/6.webp',
		price:'$39'
	},
	{
		id:7,
		name:'Diamond Accent Stud Earrings in Sterling Silver',
		imgUrl:'../img/earrings/7.jpg',
		price:'$119'
	}

]

const cards = document.querySelector('.cards');
let cardIds=[];
for(let i=0;i<earrings.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${earrings[i].imgUrl}`);
	let textBlock = document.createElement('div');
	textBlock.setAttribute('class','card-text-block');
	let text = document.createElement('div');
	let ringName = document.createElement('h3');
	ringName.innerHTML=earrings[i].name;
	let price = document.createElement('p');
	price.innerHTML=earrings[i].price;
	let icon = document.createElement('img');
	icon.setAttribute('src','../img/icons/addToCart.png');
	icon.setAttribute('class','productCercei')
	icon.setAttribute('earringId',`${earrings[i].id}`);
	icon.style.margin=0;
	
	icon.onclick=function(){
		cardIds.push(earrings[i].id);
		localStorage.setItem('cos',JSON.stringify(cardIds))
	}

	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	cards.appendChild(card);
}
