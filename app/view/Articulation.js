Ext.define('LearningJourney.view.Articulation',
        {
            extend:'Ext.Container',
            xtype:'articulation',           
            config:{
                title:'Articulation',
                showAnimation:{type:'fadeIn',duration:500},
                layout:'vbox',
                fullscreen:true,
//              This scrollable code stops overscrolling on the page
                scrollable : {
                direction: 'vertical',
                directionLock: true,
                momentumEasing:  {
                    momentum: {
                    acceleration: 30,
                    friction: 0.5
                    },
                bounce: {
                     acceleration: 0.0001,
                     springTension: 0.9999,
                     },
                 minVelocity: 5
                },
                outOfBoundRestrictFactor: 0   
                },
                items:[
                    {
                        
                        styleHtmlContent:true,
                        styleHtmlCls:'articulationText',
                        html:'<h1><u>What is Articulation?</h1></u><br>\n\
                              <p>Articulation is a pathway for students who would like to progress from\n\
                               a HND (Higher National Diploma) or HNC (Higher National Certificate) directly into 2nd or 3rd year or a degree programme. This is also referred\n\
                               to as Direct Entry.  </p><br><br>\n\
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