// Implement your views here using the SJS DSL.

/*bean 'testView',
parent:'Project.pane'
*/
form'Traceable.pane',
model:'Traceable',
labelsPosition:'ABOVE',
columnCount:2,
fields:['createTimestamp','lastUpdateTimestamp','createdBy','lastUpdatedBy']

form('Project.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:2,
	fields:['name','company','students','technologies','usesTrainers','technicalTrainers']){
		actionMap{
				actionList('FILE'){
					action(ref:'saveModuleObjectFrontAction')
					action(ref:'reloadModuleObjectFrontAction')
			  }
		}
	}
	
tabs 'Project.tab.pane',
	views:['Project.pane','Project-students.table','Project-usesTrainers.table','Project-technicalTrainers.table','Project-technologies.table','Traceable.pane']
   
table'Project-students.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
table'Project-usesTrainers.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'

table'Project-technicalTrainers.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
 
table'Project-technologies.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'

	 
form('Student.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	fields:['firstname','lastname','year','photo'],
	columnCount:2){
		actionMap{
				actionList('FILE'){
					action(ref:'saveModuleObjectFrontAction')
					action(ref:'reloadModuleObjectFrontAction')
			  }
		}
	}

tabs 'Student.tab.pane',
	views:['Student.pane','Traceable.pane']
	
table'Student-technologies.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
split_vertical'Student.proj.view',
	model:'Student',
	top:'Student.tab.pane',
	bottom:'Student-technologies.table'

	
form('Trainer.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	fields:['firstname','lastname','photo'],
	columnCount:2){
		actionMap{
				actionList('FILE'){
					action(ref:'saveModuleObjectFrontAction')
					action(ref:'reloadModuleObjectFrontAction')
			  }
		}
	}

tabs 'Trainer.tab.pane',
	views:['Trainer.pane','Traceable.pane']
	
table'Trainer-technologies.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
split_vertical'Trainer.proj.view',
	model:'Trainer',
	top:'Trainer.tab.pane',
	bottom:'Trainer-technologies.table'
	
	

form('Technology.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:5)

form('Company.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:5)

form('Year.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:5)
