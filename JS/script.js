$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});

$.validator.setDefaults({
	submitHandler: function () {
		alert("submitted!");
	}
});


$(document).ready(function () {
	$('#signupForm').validate({
		rules: {
			nombre: {
				required: true,
				minlength: 5
			},
			apell: {
				required: true,
				minlength: 5
			},
			password: {
				required: true,
				minlength: 5
			},
			confirm_password: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
			email: {
				required: true,
				email: true
			},
			agree: "required"
		},
		messages: {
			nombre: {
				required: "Por favor ingresa tu nombre completo",
				minlength: "Tu nombre debe ser de no menos de 5 caracteres"
			},
			apell: {
				required:  "Por favor ingresa tu apellido completo",
				minlength: "Tu nombre debe ser de no menos de 5 caracteres"
			},
			password: {
				required: "Por favor ingresa una contraseña",
				minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud"
			},
			confirm_password: {
				required: "Ingresa un password",
				minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
				equalTo: "Por favor ingresa la misma contraseña de arriba"
			},
			email: "Por favor ingresa un correo válido",
			luckynumber: {
				required: "Por favor"
			}
		},
	});
});