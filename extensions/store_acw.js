/* **************************************************************

   Copyright 2011 Zoovy, Inc.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

************************************************************** */

var store_acw = function() {
	var r= {
		vars : {
			catTemplates : {
				//BRANDS
				".acw.brands.100__pure" : "categoryProductListTemplate",
				".acw.brands.adoro" : "categoryProductListTemplate",
                ".acw.brands.almay" : "categoryProductListTemplate",
				".acw.brands.balmshell" : "categoryProductListTemplate",
				".acw.brands.becca.accessories" : "categoryProductListTemplate",
				".acw.brands.becca.eyes" : "categoryProductListTemplate",
				".acw.brands.becca.face" : "categoryProductListTemplate",
				".acw.brands.becca.lips" : "categoryProductListTemplate",
				".acw.brands.becca.nails" : "categoryProductListTemplate",
				".acw.brands.becca.skincare" : "categoryProductListTemplate",
				".acw.brands.benefit.body" : "categoryProductListTemplate",
				".acw.brands.benefit.eyes" : "categoryProductListTemplate",
				".acw.brands.benefit.face" : "categoryProductListTemplate",
				".acw.brands.benefit.lips" : "categoryProductListTemplate",
				".acw.brands.bobbi-brownBobbi.accessories" : "categoryProductListTemplate",
				".acw.brands.bobbi-brownBobbi.eyes" : "categoryProductListTemplate",
				".acw.brands.bobbi-brownBobbi.face" : "categoryProductListTemplate",
				".acw.brands.bobbi-brownBobbi.lips" : "categoryProductListTemplate",
				".acw.brands.bobbi-brownBobbi.skincare" : "categoryProductListTemplate",
				".acw.brands.bourjois_parisBourjois" : "categoryProductListTemplate",
				".acw.brands.china-glaze" : "categoryProductListTemplate",
				".acw.brands.claudio_riaz" : "categoryProductListTemplate",
				".acw.brands.clean" : "categoryProductListTemplate",
				".acw.brands.clinique.accessories" : "categoryProductListTemplate",
				".acw.brands.clinique.eyes" : "categoryProductListTemplate",
				".acw.brands.clinique.face" : "categoryProductListTemplate",
				".acw.brands.clinique.lips" : "categoryProductListTemplate",
				".acw.brands.clinique.nails" : "categoryProductListTemplate",
				".acw.brands.clinique.skincare" : "categoryProductListTemplate",
				".acw.brands.covergirl" : "categoryProductListTemplate",
				".acw.brands.dermablend" : "categoryProductListTemplate",
				".acw.brands.covergirl" : "categoryProductListTemplate",
				".acw.brands.dermablend" : "categoryProductListTemplate",
				".acw.brands.dior.accessories" : "categoryProductListTemplate",
				".acw.brands.dior.eyes" : "categoryProductListTemplate",
				".acw.brands.dior.face" : "categoryProductListTemplate",
				".acw.brands.dior.lips" : "categoryProductListTemplate",
				".acw.brands.dior.nails" : "categoryProductListTemplate",
				".acw.brands.dior.skincare" : "categoryProductListTemplate",
				".acw.brands.duwop" : "categoryProductListTemplate",
				".acw.brands.edward_bess" : "categoryProductListTemplate",
				".acw.brands.estee-lauder.accessories" : "categoryProductListTemplate",
				".acw.brands.estee-lauder.eyes" : "categoryProductListTemplate",
				".acw.brands.estee-lauder.face" : "categoryProductListTemplate",
				".acw.brands.estee-lauder.lips" : "categoryProductListTemplate",
				".acw.brands.estee-lauder.nails" : "categoryProductListTemplate",
				".acw.brands.estee-lauder.skincare" : "categoryProductListTemplate",
				".acw.brands.eyes-by-design" : "categoryProductListTemplate",
				".acw.brands.face-front.accessories" : "categoryProductListTemplate",
				".acw.brands.face-front.eyes" : "categoryProductListTemplate",
				".acw.brands.face-front.face" : "categoryProductListTemplate",
				".acw.brands.face-front.lips" : "categoryProductListTemplate",
				".acw.brands.face-front.nails" : "categoryProductListTemplate",
				".acw.brands.face-front.skincare" : "categoryProductListTemplate",
				".acw.brands.factory-blems" : "categoryProductListTemplate",
				".acw.brands.flirt" : "categoryProductListTemplate",
				".acw.brands.fusion-beauty" : "categoryProductListTemplate",
				".acw.brands.goody" : "categoryProductListTemplate",
				".acw.brands.guerlain" : "categoryProductListTemplate",
				".acw.brands.hard_candy.accessories" : "categoryProductListTemplate",
				".acw.brands.hard_candy.eyes" : "categoryProductListTemplate",
				".acw.brands.hard_candy.face" : "categoryProductListTemplate",
				".acw.brands.hard_candy.lips" : "categoryProductListTemplate",
				".acw.brands.hard_candy.nails" : "categoryProductListTemplate",
				".acw.brands.iso" : "categoryProductListTemplate",
				".acw.brands.jane.accessories" : "categoryProductListTemplate",
				".acw.brands.jane.eyes" : "categoryProductListTemplate",
				".acw.brands.jane.face" : "categoryProductListTemplate",
				".acw.brands.jane.lips" : "categoryProductListTemplate",
				".acw.brands.jane.nails" : "categoryProductListTemplate",
				".acw.brands.japonesque" : "categoryProductListTemplate",
				".acw.brands.kiehls" : "categoryProductListTemplate",
				".acw.brands.korres" : "categoryProductListTemplate",
				".acw.brands.kryolan" : "categoryProductListTemplate",
				".acw.brands.lancome.accessories" : "categoryProductListTemplate",
				".acw.brands.lancome.eyes" : "categoryProductListTemplate",
				".acw.brands.lancome.face" : "categoryProductListTemplate",
				".acw.brands.lancome.lips" : "categoryProductListTemplate",
				".acw.brands.lancome.nails" : "categoryProductListTemplate",
				".acw.brands.lancome.skincare" : "categoryProductListTemplate",
				".acw.brands.laura-mercier" : "categoryProductListTemplate",
				".acw.brands.lola" : "categoryProductListTemplate",
				".acw.brands.loreal.accessories" : "categoryProductListTemplate",
				".acw.brands.loreal.eyes" : "categoryProductListTemplate",
				".acw.brands.loreal.face" : "categoryProductListTemplate",
				".acw.brands.loreal.lips" : "categoryProductListTemplate",
				".acw.brands.loreal.nails" : "categoryProductListTemplate",
				".acw.brands.loreal.skincare" : "categoryProductListTemplate",
				".acw.brands.lotta_luv" : "categoryProductListTemplate",
				".acw.brands.mac.accessories" : "categoryProductListTemplate",
				".acw.brands.mac.eyes" : "categoryProductListTemplate",
				".acw.brands.mac.face" : "categoryProductListTemplate",
				".acw.brands.mac.lips" : "categoryProductListTemplate",
				".acw.brands.mac.nails" : "categoryProductListTemplate",
				".acw.brands.mac.skincare" : "categoryProductListTemplate",
				".acw.brands.make-up-forever" : "categoryProductListTemplate",
				".acw.brands.mary-kate___ashley" : "categoryProductListTemplate",
				".acw.brands.max-factor" : "categoryProductListTemplate",
				".acw.brands.maybelline.accessories" : "categoryProductListTemplate",
				".acw.brands.maybelline.eyes" : "categoryProductListTemplate",
				".acw.brands.maybelline.face" : "categoryProductListTemplate",
				".acw.brands.maybelline.lips" : "categoryProductListTemplate",
				".acw.brands.maybelline.nails" : "categoryProductListTemplate",
				".acw.brands.maybelline.skincare" : "categoryProductListTemplate",
				".acw.brands.me-me-me" : "categoryProductListTemplate",
				".acw.brands.model_co" : "categoryProductListTemplate",
				".acw.brands.nars.accessories" : "categoryProductListTemplate",
				".acw.brands.nars.eyes" : "categoryProductListTemplate",
				".acw.brands.nars.face" : "categoryProductListTemplate",
				".acw.brands.nars.lips" : "categoryProductListTemplate",
				".acw.brands.nars.nails" : "categoryProductListTemplate",
				".acw.brands.nars.skincare" : "categoryProductListTemplate",
				".acw.brands.obsessive_compulsive_cosmetics" : "categoryProductListTemplate",
				".acw.brands.ojon-hair" : "categoryProductListTemplate",
				".acw.brands.other-brands.accessories" : "categoryProductListTemplate",
				".acw.brands.other-brands.eyes" : "categoryProductListTemplate",
				".acw.brands.other-brands.face" : "categoryProductListTemplate",
				".acw.brands.other-brands.lips" : "categoryProductListTemplate",
				".acw.brands.other-brands.nails" : "categoryProductListTemplate",
				".acw.brands.other-brands.skincare" : "categoryProductListTemplate",
				".acw.brands.paula-dorf" : "categoryProductListTemplate",
				".acw.brands.pop-pixi" : "categoryProductListTemplate",
				".acw.brands.prescriptives" : "categoryProductListTemplate",
				".acw.brands.proraso" : "categoryProductListTemplate",
				".acw.brands.pupa_milano" : "categoryProductListTemplate",
				".acw.brands.red_cherry" : "categoryProductListTemplate",
				".acw.brands.revlon.accessories" : "categoryProductListTemplate",
				".acw.brands.revlon.eyes" : "categoryProductListTemplate",
				".acw.brands.revlon.face" : "categoryProductListTemplate",
				".acw.brands.revlon.lips" : "categoryProductListTemplate",
				".acw.brands.revlon.nails" : "categoryProductListTemplate",
				".acw.brands.revlon.skincare" : "categoryProductListTemplate",
				".acw.brands.rimmel_london" : "categoryProductListTemplate",
				".acw.brands.rocket-city" : "categoryProductListTemplate",
				".acw.brands.sally_hansen" : "categoryProductListTemplate",
				".acw.brands.sigma" : "categoryProductListTemplate",
				".acw.brands.smashbox.accessories" : "categoryProductListTemplate",
				".acw.brands.smashbox.eyes" : "categoryProductListTemplate",
				".acw.brands.smashbox.face" : "categoryProductListTemplate",
				".acw.brands.smashbox.lips" : "categoryProductListTemplate",
				".acw.brands.smashbox.nails" : "categoryProductListTemplate",
				".acw.brands.smashbox.skincare" : "categoryProductListTemplate",
				".acw.brands.smh" : "categoryProductListTemplate",
				".acw.brands.stila.accessories" : "categoryProductListTemplate",
				".acw.brands.stila.eyes" : "categoryProductListTemplate",
				".acw.brands.stila.face" : "categoryProductListTemplate",
				".acw.brands.stila.lips" : "categoryProductListTemplate",
				".acw.brands.stila.nails" : "categoryProductListTemplate",
				".acw.brands.stila.skincare" : "categoryProductListTemplate",
				".acw.brands.suite_7_beauty" : "categoryProductListTemplate",
				".acw.brands.tarte" : "categoryProductListTemplate",
				".acw.brands.too-faced.accessories" : "categoryProductListTemplate",
				".acw.brands.too-faced.eyes" : "categoryProductListTemplate",
				".acw.brands.too-faced.face" : "categoryProductListTemplate",
				".acw.brands.too-faced.lips" : "categoryProductListTemplate",
				".acw.brands.too-faced.nails" : "categoryProductListTemplate",
				".acw.brands.too-faced.skincare" : "categoryProductListTemplate",
				".acw.brands.twilight" : "categoryProductListTemplate",
				".acw.brands.ultraflesh" : "categoryProductListTemplate",
				".acw.brands.urban-decay.accessories" : "categoryProductListTemplate",
				".acw.brands.urban-decay.eyes" : "categoryProductListTemplate",
				".acw.brands.urban-decay.face" : "categoryProductListTemplate",
				".acw.brands.urban-decay.lips" : "categoryProductListTemplate",
				".acw.brands.urban-decay.nails" : "categoryProductListTemplate",
				".acw.brands.urban-decay.skincare" : "categoryProductListTemplate",
				".acw.brands.victorias-secret" : "categoryProductListTemplate",
				".acw.brands.wet_n_wild.accessories" : "categoryProductListTemplate",
				".acw.brands.wet_n_wild.eyes" : "categoryProductListTemplate",
				".acw.brands.wet_n_wild.face" : "categoryProductListTemplate",
				".acw.brands.wet_n_wild.lips" : "categoryProductListTemplate",
				".acw.brands.wet_n_wild.nails" : "categoryProductListTemplate",
				".acw.brands.wet_n_wild.hair" : "categoryProductListTemplate",
				".acw.brands.yr_nails" : "categoryProductListTemplate",
				".acw.brands.ysl" : "categoryProductListTemplate",
				//EYES
				".acw.200eyes.brows" : "categoryProductListTemplate",
				".acw.200eyes.eye-shadow" : "categoryProductListTemplate",
				".acw.200eyes.eye-shadow-refills" : "categoryProductListTemplate",
				".acw.200eyes.eyelashes" : "categoryProductListTemplate",
				".acw.200eyes.eyeliner" : "categoryProductListTemplate",
				".acw.200eyes.mascara" : "categoryProductListTemplate",
				".acw.200eyes.pigments" : "categoryProductListTemplate",
				".acw.200eyes.primer" : "categoryProductListTemplate",
				//LIPS
				".acw.300lips.balms" : "categoryProductListTemplate",
				".acw.300lips.lip_liner" : "categoryProductListTemplate",
				".acw.300lips.lipgloss" : "categoryProductListTemplate",
				".acw.300lips.lipstick" : "categoryProductListTemplate",
				//FACE
				".acw.400face.blush" : "categoryProductListTemplate",
				".acw.400face.concealer" : "categoryProductListTemplate",
				".acw.400face.foundation" : "categoryProductListTemplate",
				".acw.400face.powder" : "categoryProductListTemplate",
				".acw.400face.primer" : "categoryProductListTemplate",
				//ACCESSORIES
				".acw.500accessories.bags" : "categoryProductListTemplate",
				".acw.500accessories.brushes" : "categoryProductListTemplate",
				".acw.500accessories.jewelry" : "categoryProductListTemplate",
				".acw.500accessories.tools" : "categoryProductListTemplate",
				//SKIN
				".acw.600skincare.body" : "categoryProductListTemplate",
				".acw.600skincare.eyes" : "categoryProductListTemplate",
				".acw.600skincare.face" : "categoryProductListTemplate",
				".acw.600skincare.lips" : "categoryProductListTemplate",
				//NAILS
				".acw.700nails" : "categoryProductListTemplate",
				//FRAGRANCE
				".acw.800fragrance" : "categoryProductListTemplate",
				//HAIR
				".acw.450hair.conditioner" : "categoryProductListTemplate",
				".acw.450hair.hairaccessories" : "categoryProductListTemplate",
				".acw.450hair.shampoo" : "categoryProductListTemplate",
				".acw.450hair.stylingproducts" : "categoryProductListTemplate",
				//JEWELRY
				".acw.brands.jewelry.bracelet" : "categoryProductListTemplate",
				".acw.brands.jewelry.earrings" : "categoryProductListTemplate",
				".acw.brands.jewelry.necklace" : "categoryProductListTemplate",
				".acw.brands.jewelry.rings" : "categoryProductListTemplate",
				//SALE
				".acw.sale.accessories" : "categoryProductListTemplate",
				".acw.sale.eyes" : "categoryProductListTemplate",
				".acw.sale.face" : "categoryProductListTemplate",
				".acw.sale.lips" : "categoryProductListTemplate",
				".acw.sale.nails" : "categoryProductListTemplate",
				".acw.sale.skincare" : "categoryProductListTemplate"
			},
		},
		
		callbacks : {
			init : {
				onSuccess : function(){
					app.u.dump('BEGIN app.ext.ext._acw.callbacks.init.onSuccess');
					app.rq.push(['templateFunction','productTemplate','onCompletes',function(P) {
						//make a call to get a search
						var $context = $(app.u.jqSelector('#',P.parentID));
						var _tag = {"callback" : "productElasticSearchList", "extension":"store_acw", "$context" : $context, "datapointer":"ProdPageElastic"};
						
						
						/*if(app.model.fetchData(_tag.datapointer)){
							app.u.handleCallback(_tag);
							}
						else {*/
							var obj = {'filter':{'term':{'whats_hot':'1'}}};
							obj = app.ext.store_search.u.buildElasticRaw(obj);
							obj.size = 12;
							app.ext.store_search.calls.appPublicSearch.init(obj, _tag);
							//}
						//callback will call anycontent and append to product
						}]);
				},
				onError : function() {
					app.u.dump('BEGIN app.ext.ext._acw.callbacks.init.onError');
				}
			},
			startExtension : {
				onSuccess : function (){
					app.u.dump('BEGIN app.ext.ext._acw.callbacks.startExtension.onSuccess')
				},
				onError : function (){
					app.u.dump('BEGIN app.ext._acw.callbacks.startExtension.onError');
				}
			},
			productElasticSearchList : {
				onSuccess : function(responseData){
					//alert("hello");
					//app.u.dump(responseData, "debug");
					
					$('.elasticlist', responseData.$context).anycontent({"templateID":"prodPageElasticTemplate","datapointer":"ProdPageElastic"});
					//alert($('.elasticlist', responseData.$context).html());
					},
				onError : function(){
					}
				}
		},
		
		
		////////////////////////////////////   ACTION    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//actions are functions triggered by a user interaction, such as a click/tap.
//these are going the way of the do do, in favor of app events. new extensions should have few (if any) actions.
		a : {
			showReviewsModal : function(){
				$('#reviewModalContent').dialog({'modal':'true', 'title':'Product Reviews','width':950, height:500});
			},
			showInterShipWarning : function(val){
				//countrySelectorShipping
				//console.debug(val);
				
				$("#countrySelectorShipping").val(val);
				//$("#countrySelectorBilling").val(val);
				
				//var $options = $("#countrySelectorBilling > option").clone();
				//$('#countrySelectorShipping').append($options);
				//app.u.dump('Here is what is stored in countrySelectorBilling ' + abcd);
				
				if ($('#countrySelectorBilling').val() === "US"){
					$('#shippingWarning').hide();
					if ($('#countrySelectorShipping').val() === "US"){
					}
					else{
						$('#shippingWarning').show();
						$('#interShippingModal').dialog({'modal':'true', 'title':'','width':868, height:700, closeOnEscape: false, "dialogClass" : "intShippingModal"});
					}
				}
				else{
					$('#shippingWarning').show();
					$('#interShippingModal').dialog({'modal':'true', 'title':'','width':868, height:700, closeOnEscape: false, "dialogClass" : "intShippingModal"});
				}
				},
			interShipWarningAcceptClick : function(){
				if($('#interShipAgreeCheck').is(':checked')){
					$('#noCheckWarning').hide();
					$('#interShippingModal').dialog('close');
					$('.interShippingModalCont').css('height','1045px');
				}
				else
				{
					$('#noCheckWarning').show();
					$('.interShippingModalCont').css('height','1070px');
				}
			},
			closeDropdownOnClick : function($tag){
				//$('.dropdownOnClick').css({'height':'0px'});
				//$('.dropdownOnClick2').css({'height':'0px'});
				//$('.dropdownOnClick3').css({'height':'0px'});
				//$('.dropdownOnClick4').css({'height':'0px'});
				$(".dropdown", $tag).stop().animate({"height":"0px"}, 0);
			},
			
			
		},
		
		renderFormats : {
			//Identical to the showIFSet render format but sets to inline instead of block.
			showIfSetInline : function($tag,data)	{
			if(data.value)	{
				$tag.show().css('display','inline'); //IE isn't responding to the 'show', so the display:inline is added as well.
				}
			},
			
			hideIfSetAlt : function($tag,data){
				app.u.dump('Hide if set function running');
				if(data.value){
					app.u.dump('Hiding .ordersNoOrdersMess');
					//$('.ordersNoOrdersMess').hide();
				}
				else{
					//app.u.dump('Not hiding .ordersNoOrdersMess. Length is =< 0');
				}
			},
			
			processListAlt : function($tag,data){
//			app.u.dump("BEGIN renderFormats.processList");
			$tag.removeClass('loadingBG');
			if(data.bindData.loadsTemplate)	{
				var $o, //recycled. what gets added to $tag for each iteration.
				int = 0;
				for(var i in data.value)	{
					if(data.bindData.limit && int >= Number(data.bindData.limit)) {break;}
					else	{
						$o = app.renderFunctions.transmogrify(data.value[i],data.bindData.loadsTemplate,data.value[i]);
						if(typeof $o == 'object')	{
							if(data.value[i].id){} //if an id was set, do nothing.
							else	{$o.attr('data-obj_index',i)} //set index for easy lookup later.
							$tag.append($o);
							}
						else	{
							$tag.anymessage({'message':'Issue creating template using '+data.bindData.loadsTemplate,'persistant':true});
							}
						}
					int += 1;				
					}
				
				}
			else	{
				$tag.anymessage({'message':'Unable to render list item - no loadsTemplate specified.','persistant':true});
				}
				//hides or shows the order message based on whether orders are present or not.
				app.u.dump('Hide if set function running');
				if($('.orderHistoryList').children().length > 0){
					//app.u.dump('Hiding .ordersNoOrdersMess');
					$('.ordersNoOrdersMess').hide();
				}
				else{
					//app.u.dump('Showing .ordersNoOrdersMess. Length is =< 0');
					$('.ordersNoOrdersMess').show().css('display','block');
				}
			}
		}
	}
	return r;
}