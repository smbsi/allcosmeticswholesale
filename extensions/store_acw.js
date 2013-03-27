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
				".brands.yr_nails" : "categoryProductListTemplate"
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