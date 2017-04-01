// JavaScript Document

function addHeader()
{
}

function createNavbar()
{
    return $('<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation"></nav>');
}  
 function createMenu()
 {
	return $('<div class="container">'+         
		'<div class="navbar-header">'+
			'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'+
				'<span class="sr-only">Toggle navigation</span>'+
				'<span class="icon-bar"></span>'+
				'<span class="icon-bar"></span>'+
				'<span class="icon-bar"></span>'+
			'</button>'+
			'<a class="navbar-brand" href="#">Start Bootstrap</a>'+
		'</div>'+
	'</div>');
 }
 
 function createOneColumn()
 {
	 $('<div class="container">'+
	       ' <div class="row">'+
            '<div class="col-lg-12 text-center">'+
                '<h1>A Bootstrap Starter Template</h1>'+
                '<p class="lead">Complete with pre-defined file paths that you won\'t have to change!!</p>'
                -
				'<ul class="list-unstyled">'+
                    '<li>Bootstrap v3.3.7</li>'+
                    '<li>jQuery v1.11.1</li>'+
                '</ul>'+
            '</div>'+
        '</div>'+
    '</div>');
 }
 function createTwoColumns()
 {
	 $('<div class="container">'+
	       ' <div class="row">'+
            '<div class="col-lg-6 text-center">'+
                '<h1>A Bootstrap Starter Template</h1>'+
                '<p class="lead">Complete with pre-defined file paths that you won\'t have to change!!</p>'
                -
				'<ul class="list-unstyled">'+
                    '<li>Bootstrap v3.3.7</li>'+
                    '<li>jQuery v1.11.1</li>'+
                '</ul>'+
            '</div>'+
			'<div class="col-lg-6 text-center">'+
                '<h1>A Bootstrap Starter Template</h1>'+
                '<p class="lead">more text</p>'
                -
				'<ul class="list-unstyled">'+
                    '<li>Bootstrap v3.3.7</li>'+
                    '<li>jQuery v1.11.1</li>'+
                '</ul>'+
            '</div>'+
        '</div>'+
    '</div>');
 }