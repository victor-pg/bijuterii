const pandantiv = [
    {
        id:0,
        name:'Diamond Accent Elephant Pendant in',
        imgUrl:'../img/pendants/0.jpg',
        price:'$119.00'
    },
    {
        id:1,
        name:'Sterling Silver Crown Pendant with',
        imgUrl:'../img/pendants/1.jpg',
        price:'$289.00'
    },
    {
        id:2,
        name:'1/4 CT. T.W. Diamond Round Frame',
        imgUrl:'../img/pendants/2.webp',
        price:'$399.00'
    },
    {
        id:3,
        name:'1 CT. T.W. Diamond Wrapped Flower',
        imgUrl:'../img/pendants/3.jpg',
        price:'$1,579.00'
    },
    {
        id:4,
        name:'1/10 CT. T.W. Diamond Swirl Infinity',
        imgUrl:'../img/pendants/4.webp',
        price:'$289.00'
    },
    {
        id:5,
        name:'1/4 CT. T.W. Diamond Square Frame',
        imgUrl:'../img/pendants/5.webp',
        price:'$399.00'
    },
    {
        id:6,
        name:'1/6 CT. T.W. Diamond Heart-Top Key',
        imgUrl:'../img/pendants/6.jpg',
        price:'$339.00'
    }
]

const cards = document.querySelector('.cards');
for(let i=0;i<pandantiv.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${pandantiv[i].imgUrl}`);
	let textBlock = document.createElement('div');
	textBlock.setAttribute('class','card-text-block');
	let text = document.createElement('div');
	let ringName = document.createElement('h3');
	ringName.innerHTML=pandantiv[i].name;
	let price = document.createElement('p');
	price.innerHTML=pandantiv[i].price;
	let icon = document.createElement('img');
	icon.setAttribute('src','../img/icons/addToCart.png');
	icon.setAttribute('class','productCercei')
	icon.setAttribute('earringId',`${pandantiv[i].id}`);
	icon.style.margin=0;
	
	

	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	cards.appendChild(card);
}
