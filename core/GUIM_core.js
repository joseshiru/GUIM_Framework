var GUIM = {
		
		pageName: '',
	
		page: function( pageConf) {
			this.pageName = pageConf.name;
			pageConf.launch();
		},
			
		
		create: function (element){
			
			if(element){
				
				
				if(element.extend.length>0){
					console.log(element.extend);
					var 
						htmlStruct = '',
						ref = GUIM.library,
						layout={},
						html = $('body');
						
					layout = ref.layouts.identifier(element.extend);
					htmlStruct = layout.converter(ref.controls.ui.identifier(element.items));
					
					html.append($(htmlStruct));
					
					if(element.launch){
						element.launch();
					}
					
				}
				
				
				
				
			}
		},
		
		library: {
						
			layouts: {
				
				
				type: {
				
					TwoColumnsLayout: {
					
						struct: '<div class="row"><div class="large-6 columns"><div class="row"><div class="large-11 columns">{item1}</div></div></div><div class="large-6 columns"><div class="row"><div class="large-11 large-offset-1 columns">{item2}</div></div></div></div>',
						
						converter: function( items) {
						
							if(items.length>0){
								
								var 
									ref = GUIM.library.layouts.type.TwoColumnsLayout,
									struct ='<div class="row"><div class="small-12 columns">',
									c=0;
									
								
								while(c<items.length){
									
									layoutStruct = ref.struct;
									
									if( items[c+1]){
										
										struct += layoutStruct.replace('{item1}', items[c]).replace('{item2}', items[c+1]);
										c += 2;
									}
									else{
										
										struct += layoutStruct.replace('{item1}', items[c]).replace('{item2}', '');
										c++;
									}
									
								}
								return struct + "</div></div>";
							}
							else{
								
								return '';
							}
						
							
						}
					}
				},
				
				map: function(){
					
					return {
						TwoColumnsLayout: GUIM.library.layouts.type.TwoColumnsLayout
					};
				
				},
				
				identifier: function ( layout){
								
								if( layout.length>0){
									
									var 
										mapLayout = GUIM.library.layouts.map();
									
									return mapLayout[layout];
								}
							}
			},
			
			controls: {
				
						ui: {
							
							type:{
							
							
								label:{
									
									structure: '<label {id} {txtId}>{txt}</label>',
									
									processes: {
									
										converter: function (item){
										
											var 
												ref = GUIM.library.controls.ui,
												struct = ref.type.label.structure;
												
											if(item.text.length==0){
											
												struct = '';
											}
											else{
											
												struct = struct
													.replace('{txt}', item.text)
													.replace('{id}', item.id? 'id="'+ item.id +'" ':'')
													.replace('{txtId}', item.for? 'for="' + item.for + '" ':'');
												
											}
											return struct;
											
										},
										
										validation: {
											
										}
									}
								},
								
								textbox:{
									
									structure: '<input {cls} type="text" {id} {txt} />',
									
									processes: {
									
										converter: function (item){
										
											var 
												ref = GUIM.library.controls.ui,
												struct = ref.type.textbox.structure;
												struct = struct
													.replace('{txt}', item.text? 'value="' + item.text + '" ' : '')
													.replace('{id}', item.id? 'id="'+ item.id +'" ':'')
													.replace('{cls}', item.class? 'class="'+ item.class +'" ':'');
												
											
											return struct;
											
										},
										
										validation: {
											
										}
									}
								},
								
								textview:{
									
									structure: '<span {id} class="textView {cls}">{txt}</span>',
									
									processes: {
									
										converter: function (item){
										
											var 
												ref = GUIM.library.controls.ui,
												struct = ref.type.textview.structure;
												struct = struct
													.replace('{txt}', item.text? item.text : '')
													.replace('{id}', item.id? 'id="'+ item.id +'" ':'')
													.replace('{cls}', item.class? item.class:'');
												
											
											return struct;
											
										},
										
										validation: {
											
										}
									}
								},
								
								link:{
									
									structure: '<a {href} {cls}{id}>{txt}</a>',
									
									processes: {
									
										converter: function (item){
										
											var 
												ref = GUIM.library.controls.ui,
												struct = ref.type.link.structure;
												
											if(!item.text){
											
												struct = '';
											}
											else{
											
												struct = struct
													.replace('{txt}', item.text? item.text  : '')
													.replace('{id}', item.id? 'id="'+ item.id +'" ':'')
													.replace('{cls}', item.class? 'class="'+ item.class +'" ':'')
													.replace('{href}', item.href? 'href="'+ item.href +'" ':'');
												
											}
											return struct;
											
										},
										
										validation: {
											
										}
									}
								},
								
								option:{
									
									structure: '<option {id} {val} {selected}>{txt}</option>',
									
									processes: {
									
										converter: function (item){
										
											var 
												ref = GUIM.library.controls.ui,
												struct = ref.type.option.structure;
												
												
											if(!item.value){
											
												struct = '';
											}
											else{
											
												struct = struct
													.replace('{txt}', item.text? item.text  : '')
													.replace('{id}', item.id? 'id="'+ item.id +'" ':'')
													.replace('{selected}', item.selected? 'selected="'+ item.selected +'" ':'')
													.replace('{val}', item.value? 'value="'+ item.value +'" ':'');
												
											}
											
											return struct;
											
										},
										
										validation: {
											
										}
									}
								},
								
								combobox:{
									
									structure: '<select {cls} {id} data-customforms="disabled">{opt}</select>',
									
									processes: {
									
										converter: function (item){
										
											var 
												ref = GUIM.library.controls.ui,
												struct = ref.type.combobox.structure,
												options ='';
												
											if(item.children){
												
												for(var c =0; c < item.children.length; c++){
													options += ref.type.option.processes.converter(item.children[c]);
												}
											}
											
											struct = struct
												.replace('{opt}', options? options : '')
												.replace('{id}', item.id? 'id="'+ item.id +'" ':'')
												.replace('{cls}', item.class? 'class="'+ item.class +'" ':'')
												.replace('{href}', item.href? 'href="'+ item.href +'" ':'');
												
											
											return struct;
											
										},
										
										validation: {
											
										}
									}
								}
							},
							
							map:function() {
								return {
									label: GUIM.library.controls.ui.type.label,
									textbox: GUIM.library.controls.ui.type.textbox,
									link: GUIM.library.controls.ui.type.link,
									option: GUIM.library.controls.ui.type.options,
									combobox: GUIM.library.controls.ui.type.combobox,
									textview: GUIM.library.controls.ui.type.textview
								};
							},
							
							identifier: function ( items){
								
										
								if( items.length>0){
								
									var 
										ref = GUIM.library.controls.ui,
										map = ref.map(),
										struct =[];
									
									for( var c =0; c < items.length; c++){
										
										var control = items[c].type;
										
										if(map[control]){
											struct[struct.length] = map[control].processes.converter( items[c]);
												
											if(items[c].with){
												struct[struct.length-1] += ref.identifier(items[c].with);
											}
										}
										
									}
									return struct;
								}
								else{
									return '';
								}
							}
							
						}		
			}
		}	
};