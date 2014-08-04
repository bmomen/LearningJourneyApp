Ext.define('LearningJourney.store.UndergraduateStore',{
    extend:'Ext.data.Store',
    config:{
    model:'LearningJourney.model.UndergraduateModel',
    sorters:'courseName',
    grouper:{
        groupFn: function(record) {
        return record.get('courseName')[0];
       }
   },
   data:[
       {courseName: 'Accountancy'},
       {courseName: 'Anatomical Sciences'},
       {courseName: 'Animation'},
       {courseName: 'Applied Computing'},
       {courseName: 'Applied Computing: Games'},
       {courseName: 'Applied Computing: Human Computer Interaction'},
       {courseName: 'Architecture'},
       {courseName: 'Art & Design (General Foundation)'},
       {courseName: 'Art, Philosophy, Contemporary Practices'},
       {courseName: 'Arts General (full time)'},
       {courseName: 'Arts General (part time daytime)'},
       {courseName: 'Arts General (part time evening)'},
       {courseName: 'Biochemistry'},
       {courseName: 'Biological Chemistry and Drug Discovery'},
       {courseName: 'Biological Sciences'},
       {courseName: 'Biomedical Sciences'},
       {courseName: 'Business Computing'},
       {courseName: 'Business Economics with Marketing'},
       {courseName: 'Business Management'},
       {courseName: 'Childhood Practice'},
       {courseName: 'Civil Engineering'},
       {courseName: 'Community Learning and Development'},
       {courseName: 'Computing Science'},
       {courseName: 'Creative Writing'},
       {courseName: 'Dentistry'},
       {courseName: 'Digital Interaction Design'},
       {courseName: 'Drug Discovery'}
   ]
    }
});