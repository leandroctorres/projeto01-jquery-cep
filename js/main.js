
function consultaCep(){
	var cep = document.getElementById("cep").value;
	var url = "https://viacep.com.br/ws/" + cep + "/json/";
	console.log(url);
	$.ajax({
		url: url,
		type: "GET",
		success: function(response){
			console.log(response);

			$("#logradouro").html(response.logradouro);
			/**
			 * É o mesmo que:
			 * //document.getElementById("logradouro").innerHTML = response.logradouro;
			 *
			 * # pega o elemento pelo Id.
			 * . pega o elemento pela classe.
			 */
			document.getElementById("bairro").innerHTML = response.bairro;
			document.getElementById("localidade").innerHTML = response.localidade;
			document.getElementById("uf").innerHTML = response.uf;
		}
	})
}
