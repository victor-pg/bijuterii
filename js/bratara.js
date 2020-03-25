const bratara = [
    {
        id:0,
        name:'1/4 CT. T.W. Diamond Tennis Bracelet in',
        imgUrl:'../img/bracelets/0.jpg',
        price:'$299.00'
    },
    {
        id:1,
        name:'Diamond Accent Diamond-Cut Bangle',
        imgUrl:'../img/bracelets/1.webp',
        price:'$149.00'
    },
    {
        id:2,
        name:'Diamond Accent Loop Bangle in',
        imgUrl:'../img/bracelets/2.jpg',
        price:'$129.00'
    },
    {
        id:3,
        name:'1/6 CT. T.W. Enhanced Black Diamond',
        imgUrl:'../img/bracelets/3.webp',
        price:'$199.00'
    },
    {
        id:4,
        name:'1/20 CT. T.W. Diamond Arrow Open',
        imgUrl:'../img/bracelets/4.jpg',
        price:'$199.00'
    }
]


const cards = document.querySelector('.cards');
for(let i=0;i<bratara.length;i++){
	let card = document.createElement('div');
	card.setAttribute('class','card');
	let img = document.createElement('img');
	img.setAttribute('class','standart-img-size')
	img.style.margin=0;
	img.style.padding=0;
	img.setAttribute('src',`${bratara[i].imgUrl}`);
	let textBlock = document.createElement('div');
	textBlock.setAttribute('class','card-text-block');
	let text = document.createElement('div');
	let ringName = document.createElement('h3');
	ringName.innerHTML=bratara[i].name;
	let price = document.createElement('p');
	price.innerHTML=bratara[i].price;
	let icon = document.createElement('img');
	icon.setAttribute('src','../img/icons/addToCart.png');
	icon.setAttribute('class','productCercei')
	icon.setAttribute('earringId',`${bratara[i].id}`);
	icon.style.margin=0;
	
	

	text.appendChild(ringName);
	text.appendChild(price);
	textBlock.appendChild(text);
	textBlock.appendChild(icon);

	card.appendChild(img);
	card.appendChild(textBlock);
	cards.appendChild(card);
}
