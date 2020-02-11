
	function responsiveSlider(){
		defineItems();
		defineSlider();
		sliderBuilder();
	}

	let items = document.querySelectorAll('.slider-item');
	let sliderContainer = document.querySelectorAll('.slider');
	let itemsArr = [];
	let quantity = 8;


	function sliderBuilder(){
		let itemsWidth = 0;
		while(mySlider.sliderWidth >= itemsWidth){
			
		}
		for(let i = 0; i< quantity; i++){
			let element = document.createElement('img');
			element.src = './img/slider/' + (i+1) +'.svg';
			items[i].appendChild(element);
		}
	}

	function slider(slider, sliderWidth){
		this.slider = slider,
		this.sliderWidth = sliderWidth
	}


	
	function defineSlider(){
		let sliderContainer = document.querySelectorAll('.slider');
	    let mySlider =  new slider(sliderContainer[0], sliderContainer[0].offsetWidth);
		console.log(mySlider);
	}

	function itemObject(item, itemWidth, itemNumber){
		this.item = item,
		this.itemWidth = itemWidth,
		this.itemNumber = itemNumber
	}

	function defineItems(){
		for(let i = 0; i< items.length; i++){
			itemsArr[i] = new itemObject(items[i], items[i].offsetWidth, i+1);
			console.log(itemsArr[i]);
		}
	}