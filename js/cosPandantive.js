const pandantive = [
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


const idsPandantive = JSON.parse(localStorage.getItem('cosPandantive'));
const cardsPandantive = document.querySelector('.cardsPandantive');

for(let i=0;i<idsPandantive.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${pandantive[idsPandantive[i]].imgUrl}`);
	let textBlock = document.createElement('div');
	textBlock.setAttribute('class','card-text-block');
	let text = document.createElement('div');
	let ringName = document.createElement('h3');
	ringName.innerHTML=pandantive[idsPandantive[i]].name;
	let price = document.createElement('p');
	price.innerHTML=pandantive[idsPandantive[i]].price;
	let icon = document.createElement('img');
	icon.setAttribute('src','../img/icons/delete.png');
	icon.setAttribute('class','productPandantive')
	icon.style.margin=0;

	icon.onclick=function(){
		const before = idsPandantive.slice(0,i);
		const after = idsPandantive.slice(i+1);
		const full = before.concat(after);
		localStorage.setItem('cosPandantive',JSON.stringify(full));
		location.reload();
	}


	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	cardsPandantive.appendChild(card);
}
