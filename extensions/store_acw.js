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
				".brands.100pure" : "categoryProductListTemplate",
				".brands.beauty_spoon" : "categoryProductListTemplate",
				".brands.crazy_rumors_-_coming_soon_" : "categoryProductListTemplate",
				".brands.face-front" : "categoryProductListTemplate",
				".brands.jewelry" : "categoryProductListTemplate",
				".brands.lime-crime" : "categoryProductListTemplate",
				".brands.natural_products_-_coming_soon_" : "categoryProductListTemplate",
				".brands.palladio_-_coming_soon_" : "categoryProductListTemplate",
				".brands.sweetpea___fay" : "categoryProductListTemplate",
				".brands.z-palette" : "categoryProductListTemplate",
				".brands.abbe_taintor_-_coming_soon_" : "categoryProductListTemplate",
				".brands.blossom_accessories" : "categoryProductListTemplate",
				".brands.elf_-_coming_soon_" : "categoryProductListTemplate",
				".brands.face_lace" : "categoryProductListTemplate",
				".brands.kleancolor" : "categoryProductListTemplate",
				".brands.medusa_s_make_up" : "categoryProductListTemplate",
				".brands.nuturing_force" : "categoryProductListTemplate",
				".brands.rosebud" : "categoryProductListTemplate",
				".brands.towel_treats" : "categoryProductListTemplate",
				".brands.alvaro_avila" : "categoryProductListTemplate",
				".brands.blue_q_-__coming_soon_" : "categoryProductListTemplate",
				".brands.embelish_-_coming_soon_" : "categoryProductListTemplate",
				".brands.featherheads" : "categoryProductListTemplate",
				".brands.kryolan" : "categoryProductListTemplate",
				".brands.morgana_cryptoria" : "categoryProductListTemplate",
				".brands.nyx" : "categoryProductListTemplate",
				".brands.sugarpill" : "categoryProductListTemplate",
				".brands.violent_lips" : "categoryProductListTemplate",
				".brands.bdellium" : "categoryProductListTemplate",
				".brands.blum_naturals" : "categoryProductListTemplate",
				".brands.eos" : "categoryProductListTemplate",
				".brands.japonesque" : "categoryProductListTemplate",
				".brands.laqa___co" : "categoryProductListTemplate",
				".brands.naiad" : "categoryProductListTemplate",
				".brands.occ" : "categoryProductListTemplate",
				".brands.suite_7_beauty" : "categoryProductListTemplate",
				".brands.yr_nails" : "categoryProductListTemplate",
				".acw.brands.adoro" : "categoryProductListTemplate",
                ".acw.brands.almay" : "categoryProductListTemplate",
				".acw.brands.balmshell" : "categoryProductListTemplate",
				".acw.brands.becca" : "categoryProductListTemplate",
				".acw.brands.benefit" : "categoryProductListTemplate",
				".acw.brands.bobbi-brownBobbi" : "categoryProductListTemplate",
				".acw.brands.bourjois_parisBourjois" : "categoryProductListTemplate",
				".acw.brands.china-glaze" : "categoryProductListTemplate",
				".acw.brands.claudio_riaz" : "categoryProductListTemplate",
				".acw.brands.clean" : "categoryProductListTemplate",
				".acw.brands.clinique" : "categoryProductListTemplate",
				".acw.brands.covergirl" : "categoryProductListTemplate",
				".acw.brands.dermablend" : "categoryProductListTemplate",
				".acw.brands.covergirl" : "categoryProductListTemplate",
				".acw.brands.dermablend" : "categoryProductListTemplate",
				".acw.brands.dior" : "categoryProductListTemplate",
				 ".acw.brands.duwop" : "categoryProductListTemplate",
				".acw.brands.edward_bess" : "categoryProductListTemplate",
				".acw.brands.estee-lauder" : "categoryProductListTemplate",
				".acw.brands.eyes-by-design" : "categoryProductListTemplate",
				".acw.brands.face-front" : "categoryProductListTemplate",
				".acw.brands.factory-blems" : "categoryProductListTemplate",
				".acw.brands.flirt" : "categoryProductListTemplate",
				".acw.brands.fusion-beauty" : "categoryProductListTemplate",
				".acw.brands.goody" : "categoryProductListTemplate",
				".acw.brands.guerlain" : "categoryProductListTemplate",
				".acw.brands.hard_candy" : "categoryProductListTemplate",
				".acw.brands.iso" : "categoryProductListTemplate",
				".acw.brands.jane" : "categoryProductListTemplate",
				".acw.brands.japonesque" : "categoryProductListTemplate",
				".acw.brands.jewelry" : "categoryProductListTemplate",
				".acw.brands.kiehls" : "categoryProductListTemplate",
				".acw.brands.korres" : "categoryProductListTemplate",
				".acw.brands.kryolan" : "categoryProductListTemplate",
				".acw.brands.lancome" : "categoryProductListTemplate",
				".acw.brands.laura-mercier" : "categoryProductListTemplate",
				".acw.brands.lola" : "categoryProductListTemplate",
				".acw.brands.loreal" : "categoryProductListTemplate",
				".acw.brands.lotta_luv" : "categoryProductListTemplate",
				".acw.brands.mac" : "categoryProductListTemplate",
				".acw.brands.make-up-forever" : "categoryProductListTemplate",
				".acw.brands.mary-kate___ashley" : "categoryProductListTemplate",
				".acw.brands.max-factor" : "categoryProductListTemplate",
				".acw.brands.maybelline" : "categoryProductListTemplate",
				".acw.brands.me-me-me" : "categoryProductListTemplate",
				".acw.brands.model_co" : "categoryProductListTemplate",
				".acw.brands.nars" : "categoryProductListTemplate",
				".acw.brands.obsessive_compulsive_cosmetics" : "categoryProductListTemplate",
				".acw.brands.ojon-hair" : "categoryProductListTemplate",
				".acw.brands.on10" : "categoryProductListTemplate",
				".acw.brands.other-brands" : "categoryProductListTemplate",
				".acw.brands.paula-dorf" : "categoryProductListTemplate",
				".acw.brands.pop-pixi" : "categoryProductListTemplate",
				".acw.brands.prescriptives" : "categoryProductListTemplate",
				".acw.brands.proraso" : "categoryProductListTemplate",
				".acw.brands.pupa_milano" : "categoryProductListTemplate",
				".acw.brands.red_cherry" : "categoryProductListTemplate",
				".acw.brands.revlon" : "categoryProductListTemplate",
				".acw.brands.rimmel_london" : "categoryProductListTemplate",
				".acw.brands.rocket-city" : "categoryProductListTemplate",
				".acw.brands.sally_hansen" : "categoryProductListTemplate",
				".acw.brands.sigma" : "categoryProductListTemplate",
				".acw.brands.smashbox" : "categoryProductListTemplate",
				".acw.brands.smh" : "categoryProductListTemplate",
				".acw.brands.stila" : "categoryProductListTemplate",
				".acw.brands.suite_7_beauty" : "categoryProductListTemplate",
				".acw.brands.tarte" : "categoryProductListTemplate",
				".acw.brands.too-faced" : "categoryProductListTemplate",
				".acw.brands.twilight" : "categoryProductListTemplate",
				".acw.brands.ultraflesh" : "categoryProductListTemplate",
				".acw.brands.urban-decay" : "categoryProductListTemplate",
				".acw.brands.victorias-secret" : "categoryProductListTemplate",
				".acw.brands.wet_n_wild" : "categoryProductListTemplate",
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
				//FRAGRANCE
				//HAIR
				".acw.450hair.conditioner" : "categoryProductListTemplate",
				".acw.450hair.hairaccessories" : "categoryProductListTemplate",
				".acw.450hair.shampoo" : "categoryProductListTemplate",
				".acw.450hair.stylingproducts" : "categoryProductListTemplate"
				//JEWELRY
				//SALE
			},
		},
		
		callbacks : {
			init : {
				onSuccess : function(){
					app.u.dump('BEGIN app.ext.ext._acw.callbacks.init.onSuccess');
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
			}
		},
		
		renderFormats : {
			//Identical to the showIFSet render format but sets to inline instead of block.
			showIfSetInline : function($tag,data)	{
			if(data.value)	{
				$tag.show().css('display','inline'); //IE isn't responding to the 'show', so the display:inline is added as well.
				}
			}
			
		}
	}
	return r;
}