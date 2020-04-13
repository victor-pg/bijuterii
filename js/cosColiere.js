const coliere = [
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


const idsColiere = JSON.parse(localStorage.getItem('cosColiere'));
const cardsColiere = document.querySelector('.cardsColiere');

for(let i=0;i<idsColiere.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${coliere[idsColiere[i]].imgUrl}`);
	let textBlock = document.createElement('div');
	textBlock.setAttribute('class','card-text-block');
	let text = document.createElement('div');
	let ringName = document.createElement('h3');
	ringName.innerHTML=coliere[idsColiere[i]].name;
	let price = document.createElement('p');
	price.innerHTML=coliere[idsColiere[i]].price;
	let icon = document.createElement('img');
	icon.setAttribute('src','../img/icons/delete.png');
	icon.setAttribute('class','productColiere')
	icon.style.margin=0;

	icon.onclick=function(){
		const before = idsColiere.slice(0,i);
		const after = idsColiere.slice(i+1);
		const full = before.concat(after);
		localStorage.setItem('cosColiere',JSON.stringify(full));
		location.reload();
	}


	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	cardsColiere.appendChild(card);
}
