(function main() {

	var $changecarre = $('.carre');
	var $changerond = $('.rond');
	var $changelosange = $('.losange');
	var cout = true;


$('.btn').click(function(){
	$changecarre.removeClass('carre').addClass('carre2');
	$changerond.removeClass('rond').addClass('rond2');
	$changelosange.removeClass('losange').addClass('losange2');

});

$('.btn2').click(function(){
	$changecarre.removeClass('carre2').addClass('carre');
	$changerond.removeClass('rond2').addClass('rond');
	$changelosange.removeClass('losange2').addClass('losange');
});


$changerond.click(function(){
	var $t = $(this);
	
		if(cout){
			$t.removeClass('rond2').addClass('rond');
			
		}else{
			$t.removeClass('rond').addClass('rond2');
			
		}
		cout =  !cout;
	});

$('#c1').click(function(){
	var $t = $(this);

		if(cout){
				$('#c1').removeClass('carre').addClass('carre2');
				$('#r1,#r2,#r3,#r4').removeClass('rond').addClass('rond2');
			
		}else{
			$('#c1').removeClass('carre2').addClass('carre');
			$('#r1,#r2,#r3,#r4').removeClass('rond2').addClass('rond');
			
		}
		cout =  !cout;
	});

$('#c2').click(function(){
	var $t = $(this);

		if(cout){
				$('#c2').removeClass('carre').addClass('carre2');
				$('#r5,#r6,#r7,#r8').removeClass('rond').addClass('rond2');
			
		}else{
			$('#c2').removeClass('carre2').addClass('carre');
			$('#r5,#r6,#r7,#r8').removeClass('rond2').addClass('rond');
			
		}
		cout =  !cout;
	});

$('#c3').click(function(){
	var $t = $(this);

		if(cout){
				$('#c3').removeClass('carre').addClass('carre2');
				$('#r13,#r14,#r15,#r20').removeClass('rond').addClass('rond2');
			
		}else{
			$('#c3').removeClass('carre2').addClass('carre');
			$('#r13,#r14,#r15,#r20').removeClass('rond2').addClass('rond');
			
		}
		cout =  !cout;
	});

$('#c4').click(function(){
	var $t = $(this);

		if(cout){
				$('#c4').removeClass('carre').addClass('carre2');
				$('#r16,#r17,#r18,#r19').removeClass('rond').addClass('rond2');
			
		}else{
			$('#c4').removeClass('carre2').addClass('carre');
			$('#r16,#r17,#r18,#r19').removeClass('rond2').addClass('rond');
			
		}
		cout =  !cout;
	});

$('#l1').click(function(){
	var $t = $(this);

		if($t.hasClass('losange')){
				$('#l1').removeClass('losange').addClass('losange2');
				$('#r2,#r6,#r9,#r10,#r11,#r12,#r15,#r18').removeClass('rond').addClass('rond2');
			
		}else{
			$('#l1').removeClass('losange2').addClass('losange');
			$('#r2,#r6,#r9,#r10,#r11,#r12,#r15,#r18').removeClass('rond2').addClass('rond');
			
		}
		cout =  !cout;
	});

})(); //fonction main