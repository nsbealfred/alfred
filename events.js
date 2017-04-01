// JavaScript Document

$('add-nav').on('click', addNav);

$('add-2-col').on('click', addTwoColumns);

$('add-menu').on('click', addMenu);

$('#ask-submit').on('click', function(){ 
	var q = $('#question').val();
	switch(q)
	{
		case 'add nav':
			$.get('data.html', function(data){ 
				$('#body').prepend(createNavbar());
				dat = { data: $('#body')[0]}
				$.post('update-file.php', dat, function(){
					poll();
				});
			}, 'html');
		break;
		case 'add menu':
			$.get('data.html', function(data){ 
				$(data).find('#nav').append(createMenu());
				dat = { data: $('#body')[0]}
				$.post('update-file.php', dat, function(){
					poll();
				});
			}, 'html');
		break;
		case 'add one col':
			$.get('data.html', function(data){ 
				$('#body').append(createMenu());
				dat = { data: $('#body')[0]}
				$.post('update-file.php', dat, function(){
					poll();
				});
			}, 'html');
		break;
		case 'add two col':
			$.get('data.html', function(data){ 
				$('#body').append(createMenu());
				dat = { data: $('#body')[0]}
				$.post('update-file.php', dat, function(){
					poll();
				});
			}, 'html');
		break;
	
	}
});