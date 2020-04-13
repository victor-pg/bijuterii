const rings = [
	{
		id:0,
		name:"Aniversara",
		imgUrl:'../img/rings/0.png',
		price:'$174'
	},
	{
		id:1,
		name:"Aniversara",
		imgUrl:'../img/rings/1.png',
		price:'$174'
	},
	{
		id:2,
		name:"Belle",
		imgUrl:'../img/rings/2.png',
		price:'$499.99'
	},
	{	id:3,
		name:"Promise",
		imgUrl:'../img/rings/3.png',
		price:'$599.99'
	},
	{
		id:4,
		name:"Maleficent",
		imgUrl:'../img/rings/4.png',
		price:'$174.99'
	},
	{
		id:5,
		name:"Mulan",
		imgUrl:'../img/rings/5.png',
		price:'$349.99'
	},
	{
		id:6,
		name:"Silver Halo",
		imgUrl:'../img/rings/6.png',
		price:'$279.99'
	},
	{
		id:7,
		name:"Present Future",
		imgUrl:'../img/rings/7.png',
		price:'$1,127.40'
	},
	{
		id:8,
		name:"Rose",
		imgUrl:'../img/rings/8.png',
		price:'$399.99'
	},
	{
		id:9,
		name:"Black Diamond",
		imgUrl:'../img/rings/9.png',
		price:'$179.99'
	},
	{
		id:10,
		name:"Pink Topaz",
		imgUrl:'../img/rings/10.png',
		price:'$499.99'
	},
	{
		id:11,
		name:"Solitaire",
		imgUrl:'../img/rings/11.png',
		price:'$2,402.10'
	},
]


const idsInele = JSON.parse(localStorage.getItem('cosInele'));
const cardsInele = document.querySelector('.cardsInele');

for(let i=0;i<idsInele.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${rings[idsInele[i]].imgUrl}`);
	let textBlock = document.createElement('div');
	textBlock.setAttribute('class','card-text-block');
	let text = document.createElement('div');
	let ringName = document.createElement('h3');
	ringName.innerHTML=rings[idsInele[i]].name;
	let price = document.createElement('p');
	price.innerHTML=rings[idsInele[i]].price;
	let icon = document.createElement('img');
	icon.setAttribute('src','../img/icons/delete.png');
	icon.setAttribute('class','productInele')
	icon.style.margin=0;

	icon.onclick=function(){
		const before = idsInele.slice(0,i);
		const after = idsInele.slice(i+1);
		const full = before.concat(after);
		localStorage.setItem('cosInele',JSON.stringify(full));
		location.reload();
	}


	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	cardsInele.appendChild(card);
}