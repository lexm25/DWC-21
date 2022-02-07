<?php
    $arrAnuncios = array(
		0 => array(	"id"		=> 148253963,
					"provincia"		=> "SEVILLA",
					"antiguedad"	=> "15 horas",
					"href"		=> "https://s2.medias-norauto.es/images_produits/85330-a-85334/650x650/casco-moto-integral-nzi-symbio-duo-negro-gris-metalizado-xl--85334.jpg",
					"titulo"		=> "CASCO MODULAR GIVI GRIS REF. 462",
					"txt"		=> "Casco modular givi gris con gafas alta gama nuevo a estrenar p. v. p. 299 euros y los tenemos en oferta en 159 euros",
					"precio"		=> 159,
					"tipo_vendedor"		=> "profesional",
					"imagenes"	=> array(	"url_primera" => "https://images-na.ssl-images-amazon.com/images/I/61NqaCkQaDL._SY450_.jpg",
											"num_fotos" => 2)
			  ),
				  
											
					
		1 => array(	"id"		=> 148233966,
					"provincia"		=> "SEVILLA",
					"antiguedad"	=> "300 horas",
					"href"		=> "https://s2.medias-norauto.es/images_produits/85330-a-85334/650x650/casco-moto-integral-nzi-symbio-duo-negro-gris-metalizado-xl--85334.jpg",
					"titulo"		=> "CASCO MODULAR GIVI NEGRO REF. 466",
					"txt"		=> "Casco modular givi gris con gafas alta gama nuevo a estrenar p. v. p. 299 euros y los tenemos en oferta en 199 euros",
					"precio"		=> 199,
					"tipo_vendedor"		=> "profesional",
					"imagenes"	=> array(	"url_primera" => "https://images-na.ssl-images-amazon.com/images/I/61LJgbgqeSL._SL1001_.jpg",
											"num_fotos" => 2)
			  )
	);
	$arrAnuncios1 = array($arrAnuncios[1]);

	 
	if (!$_POST["anuncio"]) {
		echo json_encode($arrAnuncios);
	} else {	
		echo json_encode($arrAnuncios1);
	}
?>