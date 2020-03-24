const cercei = [
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

// const buttons = document.querySelectorAll('img.productCercei');
// let ids=[];
// for(let i=0;i<buttons.length;i++){
// 	buttons[i].onclick=function(){
// 		ids.push(buttons[i].getAttribute('earringId'));
// 		window.localStorage.setItem('cos',JSON.strtingify(ids));
// 	}
// }
// const dici = document.querySelector('.dici');

const ids = JSON.parse(localStorage.getItem('cos'));
const dici = document.querySelector('.dici');

for(let i=0;i<ids.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${cercei[ids[i]].imgUrl}`);
	let textBlock = document.createElement('div');
	textBlock.setAttribute('class','card-text-block');
	let text = document.createElement('div');
	let ringName = document.createElement('h3');
	ringName.innerHTML=cercei[ids[i]].name;
	let price = document.createElement('p');
	price.innerHTML=cercei[ids[i]].price;
	let icon = document.createElement('img');
	icon.setAttribute('src','../img/icons/delete.png');
	icon.setAttribute('class','productCercei')
	icon.style.margin=0;

	icon.onclick=function(){
		const before = ids.slice(0,i);
		const after = ids.slice(i+1);
		const full= before.concat(after);
		localStorage.setItem('cos',JSON.stringify(full));
		location.reload();
	}


	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	dici.appendChild(card);
}
