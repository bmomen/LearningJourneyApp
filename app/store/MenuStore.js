Ext.define('LearningJourney.store.MenuStore',
{
    extend:'Ext.data.Store',
    xtype:'menustore',
    
    config:{
        model:'LearningJourney.model.MenuModel',
        data:[                  
            {
                panelTitle:'Articulation Pathways',
                panelDesc:'Learn about entry methods through partner Colleges',
                panelColour:'blue',
                panelID:'Articulation'
            },
            {
                panelTitle:'Life at Dundee University',
                panelDesc:'Explore Accommodation options, DUSA, Societies, and Support Services',
                panelColour:'orange',
                panelID:'Life'
            },
            {
                panelTitle:'Undergraduate Courses',
                panelDesc:'Browse courses available and find out more information about them',
                panelColour:'green',
                panelID:'Undergraduate'
            }
        ]
        
    }
    
    
});