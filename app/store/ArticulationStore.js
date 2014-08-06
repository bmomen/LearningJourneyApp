Ext.define('LearningJourney.store.ArticulationStore',{
    extend:'Ext.data.Store',
    config:{
        model:'LearningJourney.model.ArticulationModel',
    
    data:[
        
        {
            schemeName:'Co-Curriculum Degree Programme',           
            schemeID:'cocurriculum'
        },
        {
            schemeName:'Associate Student Programme',            
            schemeID:'associate'
        
    }
    ]
}
});
