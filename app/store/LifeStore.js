Ext.define('LearningJourney.store.LifeStore',{
    extend:'Ext.data.Store',
    config:{
        model:'LearningJourney.model.LifeModel'
    },
    data:[
        {
            lifeMenuTitle:'Accomodation',
            lifeMenuDesc:'Explore accomodation options and see what\'s on offer'
        },
        {
            lifeMenuTitle:'Student Support Services',
            lifeMenuDesc:'Browse services aimed to help you during your time at University'
        },
        {
            lifeMenuTitle:'Societies',
            lifeMenuDesc:'Societies are a great way to get involved in activities you like'
        },
        {
            lifeMenuTitle:'DUSA (Students\' Association)',
            lifeMenuDesc:'Find out more about the University\'s Student Association'
        }
    ]
});