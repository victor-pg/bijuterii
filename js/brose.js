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
for(let i=0;i<brose.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${brose[i].imgUrl}`);
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
	
	

	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	cards.appendChild(card);
}