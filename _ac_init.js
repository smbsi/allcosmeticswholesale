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


app.rq.push(['extension',0,'store_prodlist','extensions/store_prodlist.js']);
app.rq.push(['extension',0,'store_navcats','extensions/store_navcats.js']);
app.rq.push(['extension',0,'store_search','extensions/store_search.js']);
app.rq.push(['extension',0,'store_product','extensions/store_product.js']);
app.rq.push(['extension',0,'store_cart','extensions/store_cart.js']);
app.rq.push(['extension',0,'store_crm','extensions/store_crm.js']);
app.rq.push(['extension',0,'myRIA','app-quickstart.js','startMyProgram']);

app.rq.push(['extension',0,'store_acw','extensions/store_acw.js','startExtension']);


//app.rq.push(['extension',1,'google_analytics','extensions/partner_google_analytics.js','startExtension']);
//app.rq.push(['extension',0,'partner_addthis','extensions/partner_addthis.js','startExtension']);
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
		auto : true,
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
		height	: 900,
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
	
	
	
	
	
app.rq.push(['templateFunction','categoryTemplate','onCompletes',function(P) 
{
	
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
}]);



/*
app.rq.push(['templateFunction','categoryTemplate','onDeparts',function(P) 
{
	app.u.dump("Destroying recently created container.");
	//Destroys the recently viewed element so that it can be used in other cat pages.
	$(".recentlyViewedBuildContainer").empty();
	}]);
*/



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
	var height = 270;
	/*$dropdown.children().each(function(){
		height += $(this).outerHeight(true);
	});*/
	$dropdown.stop().animate({"height":height+"px"}, 0);
}

var showDropdownBrand = function ($tag) {
	var $dropdown = $(".dropdown", $tag);
	var height = 620;
	/*$dropdown.children().each(function(){
		height += $(this).outerHeight(true);
	});*/
	$dropdown.stop().animate({"height":height+"px"}, 0);
}
	
var hideDropdown = function ($tag) {
	$(".dropdown", $tag).stop().animate({"height":"0px"}, 100);
}





//sample of an onDeparts. executed any time a user leaves this page/template type.
app.rq.push(['templateFunction','homepageTemplate','onDeparts',function(P) {app.u.dump("just left the homepage")}]);






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






