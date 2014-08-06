Ext.define('LearningJourney.view.Articulation',
        {
            extend:'Ext.Container',
            xtype:'articulation',           
            config:{
                title:'Articulation',
                showAnimation:{type:'fadeIn',duration:500},
                layout:'vbox',
                fullscreen:true,
                scrollable: { direction: 'vertical' },
                items:[
                    {
                        
                        styleHtmlContent:true,
                        styleHtmlCls:'articulationText',
                        html:'<h1><u>What is Articulation?</h1></u><br>\n\
                              <p>Insert articulation description here</p><br><br>\n\
                              <h1><u>Why Articulate?</h1></u><br>\n\
                              <p>A matriculation card to access, and borrow resources from, the University library.<br>\n\
                               A personal IT account, including email address and access to a range of online resources.<br>\n\
                               Access to University student support and welfare services.<br>\n\
                               Access to the sports facilities and social events at the University, as well as the Student Association. </p><br><br>'
                              
                               
                    },
                    
                    {                        
                        xtype:'dataview',
                        store:'ArticulationStore',
                        itemTpl:'<div class="articulationCls"><h1>{schemeName}</h1>{schemeInfo}',                       
                        scrollable:'false',
                        height:210
                        
                    }
                         
                ]
            }
        }
);