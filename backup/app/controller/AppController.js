Ext.define('LearningJourney.controller.AppController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            container:'main',
            infoButton:'#infoButton',
            menuPanel:'menuPanel'
            
        },
        control: {
           
           'menuPanel dataview':{
               itemtap:'onMenuTap'
           },
           
            infoButton:{
                tap: 'onInfoButton'
            },
            container:{
                back:'onBack'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {       
    },
    
    onInfoButton: function(){
        
        this.getContainer().push(Ext.create('LearningJourney.view.Info'));
        this.getInfoButton().hide();      
       
    },
    
    onBack: function(){
        this.getInfoButton().show();
    },
    
    onMenuTap:function(list,index,target,record){
        var newView = record.get('panelID');
        newView = "LearningJourney.view." + newView;
                   newView = Ext.create(newView);                    
                   this.getContainer().push(newView);
    }
});
