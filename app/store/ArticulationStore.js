Ext.define('LearningJourney.store.ArticulationStore',{
    extend:'Ext.data.Store',
    config:{
        model:'LearningJourney.model.ArticulationModel'
    },
    data:[
        {
            collegeName:'Fife College',
            collegeID:'FifeCollege'
        },
        {
            collegeName:'Dundee & Angus College',
            collegeID:'DundeeAngusCollege'
        },
        {
            collegeName:'Test',
            collegeID:'Test'
        }
    ]
});
