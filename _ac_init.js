var app = app || {vars:{},u:{}}; //make sure app exists.
app.rq = app.rq || []; //ensure array is defined. rq = resource queue.




//app.rq.push(['extension',0,'store_checkout','extensions/store_checkout.js']);
//app.rq.push(['extension',0,'convertSessionToOrder','extensions/checkout_active/extension.js']);
app.rq.push(['extension',0,'orderCreate','extensions/checkout/extension.js']);
app.rq.push(['extension',0,'cco','extensions/cart_checkout_order.js']);
//app.rq.push(['extension',0,'convertSessionToOrder','extensions/checkout_passive/extension.js']);
//app.rq.push(['extension',0,'convertSessionToOrder','extensions/checkout_required/extension.js']);

// ### NOTE - mobile does NOT work. it's in development.
//app.rq.push(['extension',0,'convertSessionToOrder','extensions/checkout_mobile/extension.js']);
//app.rq.push(['extension',0,'cco','extensions/cart_checkout_order.js']);

app.rq.push(['extension',0,'store_checkout','extensions/store_checkout.js']);
app.rq.push(['extension',0,'store_prodlist','extensions/store_prodlist.js']);
app.rq.push(['extension',0,'store_navcats','extensions/store_navcats.js']);
app.rq.push(['extension',0,'store_search','extensions/store_search.js']);
app.rq.push(['extension',0,'store_product','extensions/store_product.js']);
app.rq.push(['extension',0,'store_cart','extensions/store_cart.js']);
app.rq.push(['extension',0,'store_crm','extensions/store_crm.js']);
app.rq.push(['extension',0,'store_filter','extensions/_store_filter_search.js']);
app.rq.push(['extension',0,'myRIA','app-quickstart.js','startMyProgram']);
app.rq.push(['extension',0,'prodlist_infinite','extensions/prodlist_infinite.js']);

app.rq.push(['extension',0,'store_acw','extensions/store_acw.js','startExtension']);


//app.rq.push(['extension',1,'google_analytics','extensions/partner_google_analytics.js','startExtension']);
app.rq.push(['extension',0,'partner_addthis','extensions/partner_addthis.js']);
//app.rq.push(['extension',1,'resellerratings_survey','extensions/partner_buysafe_guarantee.js','startExtension']); /// !!! needs testing.
//app.rq.push(['extension',1,'buysafe_guarantee','extensions/partner_buysafe_guarantee.js','startExtension']);
//app.rq.push(['extension',1,'powerReviews_reviews','extensions/partner_powerreviews_reviews.js','startExtension']);
//app.rq.push(['extension',0,'magicToolBox_mzp','extensions/partner_magictoolbox_mzp.js','startExtension']); // (not working yet - ticket in to MTB)

app.rq.push(['script',0,(document.location.protocol == 'file:') ? app.vars.testURL+'jquery/config.js' : app.vars.baseURL+'jquery/config.js']); //The config.js is dynamically generated.
app.rq.push(['script',0,app.vars.baseURL+'model.js']); //'validator':function(){return (typeof zoovyModel == 'function') ? true : false;}}
app.rq.push(['script',0,app.vars.baseURL+'includes.js']); //','validator':function(){return (typeof handlePogs == 'function') ? true : false;}})
app.rq.push(['script',0,app.vars.baseURL+'controller.js']);

app.rq.push(['script',1,app.vars.baseURL+'resources/jquery.ui.jeditable.js']); //used for making text editable (customer address). non-essential. loaded late.
app.rq.push(['script',0,app.vars.baseURL+'resources/jquery.showloading-v1.0.jt.js']); //used for making text editable (customer address). non-essential. loaded late.
app.rq.push(['script',0,app.vars.baseURL+'resources/jquery.ui.anyplugins.js']); //in zero pass in case product page is first page.
app.rq.push(['script',0,app.vars.baseURL+'resources/jquery.image-gallery.jt.js']);

//Third party plugins
app.rq.push(['script',0,app.vars.baseURL+'_jquery_cycle_plugin.js']);
app.rq.push(['script',0,app.vars.baseURL+'carouFredSel-6.2.0/jquery.carouFredSel-6.2.0-packed.js']);


//add tabs to product data.
//tabs are handled this way because jquery UI tabs REALLY wants an id and this ensures unique id's between product
app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {
  var safePID = app.u.makeSafeHTMLId(P.pid); //can't use jqSelector because productTEmplate_pid still used makesafe. planned Q1-2013 update ###
  var $tabContainer = $( ".tabbedProductContent",$('#productTemplate_'+safePID));
	  if($tabContainer.length)	{
		  if($tabContainer.data("widget") == 'anytabs'){} //tabs have already been instantiated. no need to be redundant.
		  else	{
			  $tabContainer.anytabs();
			  }
		  }
	  else	{} //couldn't find the tab to tabificate.
	  
	  //START REMOVE TIMER TO REMOVE PAGE FROM DOM, FORCING A REFRESH.
//	   app.u.dump("start prod removal test function");
	  function remove1Hour(){
//		  app.u.dump('Removing all product template');
		   $('.productTemplate').remove(this);
	  }
	  setTimeout(remove1Hour, 3600000);
	  
	  
}]);

app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {

	$('.gallery a[data-gallery]',app.u.jqSelector('#',P.parentID)).each(function(){
		if($('img',$(this)).length < 1)	{
			$(this).empty().remove(); //nuke any hrefs with no images. otherwise next/previous in gallery will show an empty spot
			}
		else	{
			$(this).attr('title',app.data[P.datapointer]['%attribs']['zoovy:prod_name']); //title is used in gallery modal.
			}
		});
//init gallery.
	$('.gallery',app.u.jqSelector('#',P.parentID)).imagegallery({
		show: 'fade',
		hide: 'fade',
		fullscreen: false,
		slideshow: false
		});
		
			var $context = $(app.u.jqSelector('#',P.parentID));
			app.u.dump($context);
}]);
  
  
  app.rq.push(['templateFunction','productTemplate','onDeparts',function(P) {
	  
	//Adds any viewed products to the recently viewed list.	
	var $container = $('#recentlyViewedItemsContainer');
	$container.show();
	$("ul",$container).empty(); //empty product list
	$container.anycontent({data:app.ext.myRIA.vars.session}); //build product list
	}]);
	
	
	
var homepageLoad = false;
app.rq.push(['templateFunction','homepageTemplate','onCompletes',function(P) 
{
	//Carousel horizontal sliders - homepage banner
	var carouselHPBanner;
	function foo1(){ $(".carouselHPBannerList").carouFredSel
	({
		width   : 710,
		height	: 390,
		items   : 1,
		scroll: 1,
		auto : {
			duration    : 500,
			timeoutDuration: 5000,
			pauseOnHover: true
		},
		pagination  : "#paginCaro",
		prev : ".prevHPCaro",
		next : ".nextHPCaro"
	});
	}
	carouselHPBanner = foo1;
	setTimeout(carouselHPBanner, 2000);
	
	
	//Carousel horizontal sliders - homepage search lists
	var carouselHPSearch;
	function foo2(){ $(".carouselHPSearchList").carouFredSel
	({
		width   : 1000,
		height	: 1025,
		items   : 1,
		scroll: 1,
		auto : false
	});
	}
	carouselHPSearch = foo2;
	setTimeout(carouselHPSearch, 2000);	
	
	
	var carouselHPSearchPaginationTitle;
	function foo3(){ $(".carouselSearchPaginTitle").carouFredSel
	({
		width   : 1000,
		height	: 50,
		align: "left",
		items   : 3,
		scroll: 1,
		auto : false,
		items: {minimum: 1}
	});
	}
	carouselHPSearchPaginationTitle = foo3;
	setTimeout(carouselHPSearchPaginationTitle, 2000);	
	
	
	var carouselHPSearchPaginationTitleBottom;
	function foo4(){ $(".carouselSearchPaginTitleBottom").carouFredSel
	({
		width   : 1000,
		height	: 50,
		align: "left",
		items   : 3,
		scroll: 1,
		auto : false,
		overflow: "hidden",
		items: {minimum: 1}
	});
	$("#nextHPSearchCaro").click(function() {
    	$(".carouselSearchPaginTitle").trigger("next", 1);
		$(".carouselHPSearchList").trigger("next", 1);
		$(".carouselSearchPaginTitleBottom").trigger("next", 1);
    });
	$("#nextHPSearchCaro2").click(function() {
    	$(".carouselSearchPaginTitle").trigger("next", 1);
		$(".carouselHPSearchList").trigger("next", 1);
		$(".carouselSearchPaginTitleBottom").trigger("next", 1);
    });
	$("#prevHPSearchCaro").click(function() {
    	$(".carouselSearchPaginTitle").trigger("prev", 1);
		$(".carouselHPSearchList").trigger("prev", 1);
		$(".carouselSearchPaginTitleBottom").trigger("prev", 1);
    });
	$("#prevHPSearchCaro2").click(function() {
    	$(".carouselSearchPaginTitle").trigger("prev", 1);
		$(".carouselHPSearchList").trigger("prev", 1);
		$(".carouselSearchPaginTitleBottom").trigger("prev", 1);
    });	
	}
	carouselHPSearchPaginationTitleBottom = foo4;
	setTimeout(carouselHPSearchPaginationTitleBottom, 2000);
}]);





/*
app.rq.push(['templateFunction','categoryTemplate','onInits',function(P) 
{
//Checks to see if the #recentlyViewedItemsContainer exists and creates it if it doesn't
	if($('#recentlyViewedItemsContainer').length === 0)
	{app.u.dump("recently viewed container exists, aborting create");}
	else
	{
		app.u.dump("recently viewed container does not exists, creating new container/list");
		$('.recentlyViewedBuildContainer').append("<div id='recentlyViewedItemsContainer'> <ul data-bind=\"var: session(recentlyViewedItems); format: productList; extension: store_prodlist; loadsTemplate: productListTemplate; hide_summary:1; hide_pagination:1; withReviews:1;\" class='listStyleNone fluidList clearfix noPadOrMargin productList'></ul></div>");
	}
}]);	
*/	

function addScrollPosSet(){
	for( var t in app.ext.myRIA.template ){
	  if(app.ext.myRIA.template[t].onDeparts){
		app.ext.myRIA.template[t].onDeparts.push(function(){
			if(app.ext.store_acw.vars.scrollPosBackHit === 1){
				app.u.dump("Begin returning scroll position to previous location");
				app.u.dump("back button was hit.");
				app.u.dump(app.ext.store_acw.vars.scrollPosBackHit);
				app.u.dump("app.ext.store_acw.vars.scrollPosArrayIndex = " + app.ext.store_acw.vars.scrollPosArrayIndex);
				app.u.dump("app.ext.store_acw.vars.scrollPosHist[app.ext.store_acw.vars.scrollPosArrayIndex] = " + app.ext.store_acw.vars.scrollPosHist[app.ext.store_acw.vars.scrollPosArrayIndex]);
				if(app.ext.store_acw.vars.scrollPosArrayIndex === 0){
					function scrollToPosition1(){
						$('html, body').animate({scrollTop : app.ext.store_acw.vars.scrollPosHist[app.ext.store_acw.vars.scrollPosArrayIndex]},1000);
						app.ext.store_acw.vars.scrollPosBackHit = 0;
						app.u.dump("app.ext.store_acw.vars.scrollPosArrayIndex = 0");
						app.u.dump("app.ext.store_acw.vars.scrollPosHist[app.ext.store_acw.vars.scrollPosArrayIndex] = " + app.ext.store_acw.vars.scrollPosHist[app.ext.store_acw.vars.scrollPosArrayIndex]);
						app.u.dump("Ran scrollToPosition1");
					}
					setTimeout(scrollToPosition1, 2000);
				}
				else{
						function scrollToPosition2(){
							app.u.dump("Begin returning scroll position to previous location");
							//app.u.dump("app.ext.store_acw.vars.scrollPosArrayIndex before reduction = " + app.ext.store_acw.vars.scrollPosArrayIndex);
							app.ext.store_acw.vars.scrollPosArrayIndex = app.ext.store_acw.vars.scrollPosArrayIndex - 1;
							app.u.dump("index passed into scrollTo = " + app.ext.store_acw.vars.scrollPosArrayIndex);
							app.u.dump("app.ext.store_acw.vars.scrollPosHist = " + app.ext.store_acw.vars.scrollPosHist);
							app.u.dump("app.ext.store_acw.vars.scrollPosHist[app.ext.store_acw.vars.scrollPosArrayIndex] = " + app.ext.store_acw.vars.scrollPosHist[app.ext.store_acw.vars.scrollPosArrayIndex]);
							$('html, body').animate({scrollTop : app.ext.store_acw.vars.scrollPosHist[app.ext.store_acw.vars.scrollPosArrayIndex]},1000);
							app.ext.store_acw.vars.scrollPosBackHit = 0;
							app.ext.store_acw.vars.scrollPosArrayIndex = app.ext.store_acw.vars.scrollPosArrayIndex - 1;
							app.u.dump("Ran scrollToPosition2");
						}
						setTimeout(scrollToPosition2, 2000);
				}
			}
		});
	  }
	}
}
setTimeout(addScrollPosSet, 5000);

function addScrollPosStoring(){
	for( var t in app.ext.myRIA.template ){
	  if(app.ext.myRIA.template[t].onCompletes){
		app.ext.myRIA.template[t].onCompletes.push(function(){
			app.u.dump("Begin adding scroll position to array");
			app.u.dump("app.ext.store_acw.vars.scrollPosBackHit = " + app.ext.store_acw.vars.scrollPosBackHit);
			if(app.ext.store_acw.vars.scrollPosHist === ""){
				app.u.dump("app.ext.store_acw.vars.scrollPosHist is null");
				app.ext.store_acw.vars.scrollPosHist = window.pageYOffset;
				app.ext.store_acw.vars.scrollPosArrayIndex = 0;
				app.u.dump("app.ext.store_acw.vars.scrollPosHist = " + app.ext.store_acw.vars.scrollPosHist);
				app.u.dump("app.ext.store_acw.vars.scrollPosArrayIndex = " + app.ext.store_acw.vars.scrollPosArrayIndex);
			}
			else{
				if(app.ext.store_acw.vars.scrollPosArrayIndex === 0){
					app.u.dump("app.ext.store_acw.vars.scrollPosHist is 0");
					var newArray = new Array();
					var currentIndex = app.ext.store_acw.vars.scrollPosArrayIndex;
					newArray[0] = app.ext.store_acw.vars.scrollPosHist;
					newArray[1] = window.pageYOffset;
					app.ext.store_acw.vars.scrollPosHist = newArray;
					currentIndex = currentIndex + 1;
					app.ext.store_acw.vars.scrollPosArrayIndex = currentIndex;
					app.u.dump("app.ext.store_acw.vars.scrollPosHist = " + app.ext.store_acw.vars.scrollPosHist);
					app.u.dump("app.ext.store_acw.vars.scrollPosArrayIndex = " + app.ext.store_acw.vars.scrollPosArrayIndex);
				}
				else{
					app.u.dump("app.ext.store_acw.vars.scrollPosHist does not = 0");
					var oldArray = new Array();
					var currentIndex = app.ext.store_acw.vars.scrollPosArrayIndex;
					oldArray = app.ext.store_acw.vars.scrollPosHist;
					currentIndex = currentIndex + 1;
					oldArray[currentIndex] = window.pageYOffset;
					app.ext.store_acw.vars.scrollPosHist = oldArray;
					app.ext.store_acw.vars.scrollPosArrayIndex = currentIndex;
					app.u.dump("app.ext.store_acw.vars.scrollPosHist = " + app.ext.store_acw.vars.scrollPosHist);
					app.u.dump("app.ext.store_acw.vars.scrollPosArrayIndex = " + app.ext.store_acw.vars.scrollPosArrayIndex);
				}
			}
		});
	  }
	}
}
setTimeout(addScrollPosStoring, 5000);
	
	
	
	
app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) 
{
	
	
	/*
	//Carousel horizontal sliders - homepage search lists
	var carouselCatSearch;
	function foo5(){ $(".carouselCatSearchList").carouFredSel
	({
		width   : 1300,
		height	: 1165,
		items   : 1,
		scroll: 1,
		auto : false
	});
	}
	carouselCatSearch = foo5;
	setTimeout(carouselCatSearch, 2000);	
	
	
	var carouselCatSearchPaginationTitle;
	function foo6(){ $(".carouselCatSearchPaginTitle").carouFredSel
	({
		width   : 1300,
		height	: 50,
		align: "left",
		items   : 3,
		scroll: 1,
		auto : false,
		items: {minimum: 1}
	});
	}
	carouselCatSearchPaginationTitle = foo6;
	setTimeout(carouselCatSearchPaginationTitle, 2000);	
	
	
	var carouselCatSearchPaginationTitleBottom;
	function foo7(){ $(".carouselCatSearchPaginTitleBottom").carouFredSel
	({
		width   : 1300,
		height	: 50,
		align: "left",
		items   : 3,
		scroll: 1,
		auto : false,
		items: {minimum: 1}
	});
	$(".nextCatSearchCaro").click(function() {
    	$(".carouselCatSearchPaginTitle").trigger("next", 1);
		$(".carouselCatSearchList").trigger("next", 1);
		$(".carouselCatSearchPaginTitleBottom").trigger("next", 1);
    });
	$(".nextCatSearchCaro2").click(function() {
    	$(".carouselCatSearchPaginTitle").trigger("next", 1);
		$(".carouselCatSearchList").trigger("next", 1);
		$(".carouselCatSearchPaginTitleBottom").trigger("next", 1);
    });
	$(".prevCatSearchCaro").click(function() {
    	$(".carouselCatSearchPaginTitle").trigger("prev", 1);
		$(".carouselCatSearchList").trigger("prev", 1);
		$(".carouselCatSearchPaginTitleBottom").trigger("prev", 1);
    });
	$(".prevCatSearchCaro2").click(function() {
    	$(".carouselCatSearchPaginTitle").trigger("prev", 1);
		$(".carouselCatSearchList").trigger("prev", 1);
		$(".carouselCatSearchPaginTitleBottom").trigger("prev", 1);
    });	
	}
	carouselCatSearchPaginationTitleBottom = foo7;
	setTimeout(carouselCatSearchPaginationTitleBottom, 2000);
	*/
	
	//START REMOVE TIMER TO REMOVE PAGE FROM DOM, FORCING A REFRESH.
//	  app.u.dump("start cat removal test function");
	  function remove1Hour(){
//		   app.u.dump('Removing all cat template');
		   $('.categoryTemplate').remove();
	  }
	  setTimeout(remove1Hour, 3600000);
	
	
}]);

//ADDS FILTERED SEARCH TO THIS CAT PAGE
/*app.rq.push(['templateFunction','categoryProductListTemplate','onCompletes',function(P) 
{
	var $context = $(app.u.jqSelector('#',P.parentID));
	
	app.ext.store_filter.vars.catPageID = $(app.u.jqSelector('#',P.parentID));  
	
	app.u.dump("BEGIN categoryTemplate onCompletes for filtering");
	if(app.ext.store_filter.filterMap[P.navcat])	{
		app.u.dump(" -> safe id DOES have a filter.");

		var $page = $(app.u.jqSelector('#',P.parentID));
		app.u.dump(" -> $page.length: "+$page.length);
		if($page.data('filterAdded'))	{} //filter is already added, don't add again.
		else	{
			$page.data('filterAdded',true)
			var $form = $("[name='"+app.ext.store_filter.filterMap[P.navcat].filter+"']",'#appFilters').clone().appendTo($('.filterContainer',$page));
			$form.on('submit.filterSearch',function(event){
				event.preventDefault()
				app.u.dump(" -> Filter form submitted.");
				app.ext.store_filter.a.execFilter($form,$page);
				});
	
			if(typeof app.ext.store_filter.filterMap[P.navcat].exec == 'function')	{
				app.ext.store_filter.filterMap[P.navcat].exec($form,P)
				}
	
	//make all the checkboxes auto-submit the form.
			$(":checkbox",$form).off('click.formSubmit').on('click.formSubmit',function() {
				$form.submit();      
				});
			}
		}
		
		//Reset button functionality
		$('.resetButton', $context).click(function(){
		$context.empty().remove();
		showContent('category',{'navcat':P.navcat});
		});

}]);*/



app.rq.push(['templateFunction','categoryTemplate','onDeparts',function(P) 
{
	/*
	app.u.dump("Destroying recently created container.");
	//Destroys the recently viewed element so that it can be used in other cat pages.
	$(".recentlyViewedBuildContainer").empty();
	*/
}]);




app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) 
{
	/*REMOVED DUE TO NEW DESIGN
	//Carousel horizontal sliders - homepage search lists
	var carouselProdSearch;
	function foo8(){ $(".carouselProdSearchList").carouFredSel
	({
		width   : 1300,
		height	: 1000,
		items   : 1,
		scroll: 1,
		auto : false
	});
	}
	carouselProdSearch = foo8;
	setTimeout(carouselProdSearch, 2000);	
	
	
	var carouselProdSearchPaginationTitle;
	function foo9(){ $(".carouselProdSearchPaginTitle").carouFredSel
	({
		width   : 1300,
		height	: 50,
		align: "left",
		items   : 3,
		scroll: 1,
		auto : false,
		items: {minimum: 1}
	});
	}
	carouselProdSearchPaginationTitle = foo9;
	setTimeout(carouselProdSearchPaginationTitle, 2000);	
	
	
	var carouselProdSearchPaginationTitleBottom;
	function foo10(){ $(".carouselProdSearchPaginTitleBottom").carouFredSel
	({
		width   : 1300,
		height	: 50,
		align: "left",
		items   : 3,
		scroll: 1,
		auto : false,
		items: {minimum: 1}
	});
	$(".nextProdSearchCaro").click(function() {
    	$(".carouselProdSearchPaginTitle").trigger("next", 1);
		$(".carouselProdSearchList").trigger("next", 1);
		$(".carouselProdSearchPaginTitleBottom").trigger("next", 1);
    });
	$(".nextProdSearchCaro2").click(function() {
    	$(".carouselProdSearchPaginTitle").trigger("next", 1);
		$(".carouselProdSearchList").trigger("next", 1);
		$(".carouselProdSearchPaginTitleBottom").trigger("next", 1);
    });
	$(".prevProdSearchCaro").click(function() {
    	$(".carouselProdSearchPaginTitle").trigger("prev", 1);
		$(".carouselProdSearchList").trigger("prev", 1);
		$(".carouselProdSearchPaginTitleBottom").trigger("prev", 1);
    });
	$(".prevProdSearchCaro2").click(function() {
    	$(".carouselProdSearchPaginTitle").trigger("prev", 1);
		$(".carouselProdSearchList").trigger("prev", 1);
		$(".carouselProdSearchPaginTitleBottom").trigger("prev", 1);
    });	
	}
	carouselProdSearchPaginationTitleBottom = foo10;
	setTimeout(carouselProdSearchPaginationTitleBottom, 2000);
	*/
}]);




app.rq.push(['templateFunction','cartTemplate','onCompletes',function(P) 
{
		
		$('.wlAddCloseButton').click(function() {
				$(".addToWishlistForm").hide();
			}
		);
}]);


//Header dropdown menus
var showDropdown = function ($tag) {
	var $dropdown = $(".dropdown", $tag);
	var height = 313;
	/*$dropdown.children().each(function(){
		height += $(this).outerHeight(true);
	});*/
	$dropdown.stop().animate({"height":height+"px"}, 0);
}

var showDropdownBrand = function ($tag) {
	var $dropdown = $(".dropdown", $tag);
	var height = 548;
	/*$dropdown.children().each(function(){
		height += $(this).outerHeight(true);
	});*/
	$dropdown.stop().animate({"height":height+"px"}, 0);
}
	
var hideDropdown = function ($tag) {
	$(".dropdown", $tag).stop().animate({"height":"0px"}, 100);
}

//IE8 dropdown alterate images
var hideIEBorderImg = function ($tag) {
	//app.u.dump("Begin IE border alt image switching");
	if($(".dropdownLeftBorderBrandImg").length){
		$(".dropdownLeftBorderBrandImg2").hide().css("visibility","hidden");
		$(".headerDropdownBrand").css("top","10px");
		//app.u.dump('removing brand left border');
	}
	else{
		//app.u.dump('leaving brand left border');
	}
	if($(".dropdownLeftBorderImg3").length){
		$(".dropdownLeftBorderImg4").hide().css("visibility","hidden");
		//app.u.dump('removing all other left border');
	}
	else{
		//app.u.dump('leaving all other left border');
	}
	if($(".dropdownTopBorderBrandImg").length){
		$(".dropdownTopBorderBrandImg2").hide().css("visibility","hidden");
		//app.u.dump('removing brand top border');
	}
	else{
		//app.u.dump('leaving brand top border');
	}
	if($(".dropdownTopBorderImg3").length){
		$(".dropdownTopBorderImg4").hide().css("visibility","hidden");
		//app.u.dump('removing all other top border');
	}
	else{
		//app.u.dump('leaving all other top border');
	}
	if($(".dropdownRightBorderBrandImg").length){
		$(".dropdownRightBorderBrandImg2").hide().css("visibility","hidden");
		//app.u.dump('removing brand right border');
	}
	else{
		//app.u.dump('leaving brand right border');
	}
	if($(".dropdownRightBorderImg3").length){
		$(".dropdownRightBorderImg4").hide().css("visibility","hidden");
		//app.u.dump('removing all other right border');
	}
	else{
		//app.u.dump('leaving all other right border');
	}
	if($(".dropdownBottomBorderBrandImg").length){
		$(".dropdownBottomBorderBrandImg2").hide().css("visibility","hidden");
		//app.u.dump('removing brand bottom border');
	}
	else{
		//app.u.dump('leaving brand bottom border');
	}
	if($(".dropdownBottomBorderImg3").length){
		$(".dropdownBottomBorderImg4").hide().css("visibility","hidden");
		//app.u.dump('removing all other bottom border');
	}
	else{
		//app.u.dump('leaving all other bottom border');
	}
}
setTimeout(hideIEBorderImg, 2000);


//sample of an onDeparts. executed any time a user leaves this page/template type.
app.rq.push(['templateFunction','homepageTemplate','onDeparts',function(P) {app.u.dump("just left the homepage")}]);

app.rq.push(['templateFunction','customerTemplate','onCompletes',function(P) {
	
}]);






//group any third party files together (regardless of pass) to make troubleshooting easier.
app.rq.push(['script',0,(document.location.protocol == 'https:' ? 'https:' : 'http:')+'//ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min.js']);


/*
This function is overwritten once the controller is instantiated. 
Having a placeholder allows us to always reference the same messaging function, but not impede load time with a bulky error function.
*/
app.u.throwMessage = function(m)	{
	alert(m); 
	}

app.u.howManyPassZeroResourcesAreLoaded = function(debug)	{
	var L = app.vars.rq.length;
	var r = 0; //what is returned. total # of scripts that have finished loading.
	for(var i = 0; i < L; i++)	{
		if(app.vars.rq[i][app.vars.rq[i].length - 1] === true)	{
			r++;
			}
		if(debug)	{app.u.dump(" -> "+i+": "+app.vars.rq[i][2]+": "+app.vars.rq[i][app.vars.rq[i].length -1]);}
		}
	return r;
	}


//gets executed once controller.js is loaded.
//check dependencies and make sure all other .js files are done, then init controller.
//function will get re-executed if not all the scripts in app.vars.scripts pass 1 are done loading.
//the 'attempts' var is incremented each time the function is executed.

app.u.initMVC = function(attempts){
//	app.u.dump("app.u.initMVC activated ["+attempts+"]");
	var includesAreDone = true,
	percentPerInclude = (100 / app.vars.rq.length),   //what percentage of completion a single include represents (if 10 includes, each is 10%).
	resourcesLoaded = app.u.howManyPassZeroResourcesAreLoaded(),
	percentComplete = Math.round(resourcesLoaded * percentPerInclude); //used to sum how many includes have successfully loaded.

//make sure precentage is never over 100
	if(percentComplete > 100 )	{
		percentComplete = 100;
		}

	$('#appPreViewProgressBar','#appPreView').val(percentComplete);
	$('#appPreViewProgressText','#appPreView').empty().append(percentComplete+"% Complete");

	if(resourcesLoaded == app.vars.rq.length)	{
		var clickToLoad = false;
		if(clickToLoad){
			$('#loader').fadeOut(1000);
			$('#clickToLoad').delay(1000).fadeIn(1000).click(function() {
				app.u.loadApp();
			});
		} else {
			app.u.loadApp();
			}
		}
	else if(attempts > 50)	{
		app.u.dump("WARNING! something went wrong in init.js");
		//this is 10 seconds of trying. something isn't going well.
		$('#appPreView').empty().append("<h2>Uh Oh. Something seems to have gone wrong. </h2><p>Several attempts were made to load the store but some necessary files were not found or could not load. We apologize for the inconvenience. Please try 'refresh' and see if that helps.<br><b>If the error persists, please contact the site administrator</b><br> - dev: see console.</p>");
		app.u.howManyPassZeroResourcesAreLoaded(true);
		}
	else	{
		setTimeout("app.u.initMVC("+(attempts+1)+")",250);
		}

	}

app.u.loadApp = function() {
//instantiate controller. handles all logic and communication between model and view.
//passing in app will extend app so all previously declared functions will exist in addition to all the built in functions.
//tmp is a throw away variable. app is what should be used as is referenced within the mvc.
	app.vars.rq = null; //to get here, all these resources have been loaded. nuke record to keep DOM clean and avoid any duplication.
	var tmp = new zController(app);
//instantiate wiki parser.
	myCreole = new Parse.Simple.Creole();
	}


//Any code that needs to be executed after the app init has occured can go here.
//will pass in the page info object. (pageType, templateID, pid/navcat/show and more)
app.u.appInitComplete = function(P)	{
	app.u.dump("Executing myAppIsLoaded code...");
	}




//don't execute script till both jquery AND the dom are ready.
$(document).ready(function(){
	app.u.handleRQ(0)
	});






