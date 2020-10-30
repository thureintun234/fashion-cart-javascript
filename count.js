function count(){
	var shopString=localStorage.getItem('fash_shop');
	if(shopString){
		shopArray=JSON.parse(shopString);
		if(shopArray!=0){
			var count=shopArray.length;
			$('#item_count').text('('+count+')');
		}
		
	}else{
			$('#item_count').text('()');
		}
}