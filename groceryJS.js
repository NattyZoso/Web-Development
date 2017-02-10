//Created by Mark Newbury
//	CIS376 - Grocery List
//	03/23/2016

$(document).ready(function(){

	//Declares globabl variables
	var $list = $('ul');
	var $newItemForm = $('#newItemForm');
	var $newItemButton = $('#newItemButton');
    var item = ''; 
	var li = $('li');
	var liSelected;

	$('li').hide().each(function(index) {          
    $(this).delay(500 * index).fadeIn(1500);     
	});
	
	//Function counts items in the list
	function updateCount() {                         counter
      var items = $('li[class!=complete]').length;   
      $('#counter').text(items);                     
    }
  updateCount();                                    
	
	//Shows and hides button and form
    $newItemButton.show();                         		
    $newItemForm.hide();  						   		
                         
    $('#showForm').on('click', function() {            
		$newItemButton.hide();                        
		$newItemForm.show();                           
    });
	
	//Adds new items to the grocery list
    $newItemForm.on('submit', function(e) {           
		e.preventDefault();                           
		var text = $('input:text').val();             
		$list.append('<li>' + text + '</li>');        
		$('input:text').val('');                     
		updateCount();                                
    });
	
   //Sets items as complete and gives option to remove them
  $list.on('dblclick', 'li', function(){
	  var $this = $(this);
	  var complete = $this.hasClass('complete');
	  
	   if (complete === true) {         
      $this.animate({                 
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {    
        $this.remove();                
      });
    } else {                           
      item = $this.text();             
      $this.remove();                  
      $list                            
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);           
      updateCount();                   
    }                 
	 
  });
  //Sets an item to favorite or removes favorite icon
  $list.on('click', 'li', function(){
	$(this).toggleClass('favorite');
  });
    
  //Change list item color on mouse hover
  $('li').hover(function(){
	 $(this).css('background-color', '#6CC0AC');
	 }, function(){
	 $(this).css('background-color', '#EC8B68'); 
  });
  
  //Adds keyboard navigation to the list
//  $(window).keydown(function(e){
//    if(e.which === 40){
//        if(liSelected){
//            liSelected.removeClass('selected');
//            next = liSelected.next();
//            if(next.length > 0){
//                liSelected = next.addClass('selected');
//            }else{
//                liSelected = li.eq(0).addClass('selected');
//            }
//        }else{
//            liSelected = li.eq(0).addClass('selected');
//        }
//    }else if(e.which === 38){
//        if(liSelected){
//            liSelected.removeClass('selected');
//            next = liSelected.prev();
//            if(next.length > 0){
//                liSelected = next.addClass('selected');
//            }else{
//                liSelected = li.last().addClass('selected');
 //           }
//        }else{
//            liSelected = li.last().addClass('selected');
//        }
//    }
//  });

});

 

