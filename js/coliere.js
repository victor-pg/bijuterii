const necklace = [
	{
		id:0,
		name:'Script Name Necklace in Sterling Silver',
		imgUrl:'../img/necklace/0.jpg',
		price:'$59'
	},
	{
		id:1,
		name:'Diamond Accent Hammered Name ',
		imgUrl:'../img/necklace/1.jpg',
		price:'$199'
	},
	{
		id:2,
		name:'Cursive Name Necklace (1 Line)',
		imgUrl:'../img/necklace/2.jpg',
		price:'$74.37'
	},
	{
		id:3,
		name:'1/5 CT. T.W. Diamond Pendant Necklace',
		imgUrl:'../img/necklace/3.jpg',
		price:'$379'
	},
	{
		id:4,
		name:'1/2 CT. T.W. Diamond "S" Tennis',
		imgUrl:'../img/necklace/4.webp',
		price:'$399'
	},
	{
		id:5,
		name:'Diamond Accent Mom Heart Necklace',
		imgUrl:'../img/necklace/5.jpg',
		price:'$149'
	}
]

const cards = document.querySelector('.cards');
for(let i=0;i<necklace.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${necklace[i].imgUrl}`);
	let textBlock = document.createElement('div');
	textBlock.setAttribute('class','card-text-block');
	let text = document.createElement('div');
	let ringName = document.createElement('h3');
	ringName.innerHTML=necklace[i].name;
	let price = document.createElement('p');
	price.innerHTML=necklace[i].price;
	let icon = document.createElement('img');
	icon.setAttribute('src','../img/icons/addToCart.png');
	icon.setAttribute('class','productCercei')
	icon.setAttribute('earringId',`${necklace[i].id}`);
	icon.style.margin=0;
	
	

	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	cards.appendChild(card);
}
