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

var _acw = function() {
	var r= {
		vars : {
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