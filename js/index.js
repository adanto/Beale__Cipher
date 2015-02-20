(function(){
	var code = $('.code');
	var key = $('.key');
	var butObtText = $('[data-button="obtain"]');
	var codeText = "";
	var keyText = "";
	var ciphertext = [];
	
	$( butObtText ).on('click', function(event){
			decipher(event);
		});


	function decipher(event) {
		event.preventDefault();

		ciphertext = [];
		codeText = code.val();
		keyText = key.val();
		codeText = codeText.split(", ");
		keyText = keyText.split(" ");
		console.log(codeText);
		console.log(keyText);

		for(i = 0; i<codeText.length; i++){
			ciphertext.push(keyText[codeText[i]-1][0]);
		};

		ciphertext = ciphertext.join("");
		console.log(ciphertext);
		generate();
	};

	function generate() {
		$('.plaintext__text').val(ciphertext);
	};

})();
