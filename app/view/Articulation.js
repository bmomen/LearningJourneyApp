Ext.define('LearningJourney.view.Articulation',
        {
            extend:'Ext.Panel',
            xtype:'articulation',           
            config:{
                title:'Articulation',
                showAnimation:{type:'fadeIn',duration:500},
                layout:'card',
                items:[
                    {
                        docked:'top',
                        html:'<div class="menuInfo"><p>Dundee University is partnered with several colleges to enable\n\
                             you to do the first year of a degree there. Select a College to find out which Courses are eligible.</p>'
                    },                                   
                    {
                        xtype:'dataview',
                        store:'ArticulationStore',
                        itemTpl:'<div class="articulationCls"><h1>{collegeName}</h1>'
                    }
                         
                ]
            }
        }
);