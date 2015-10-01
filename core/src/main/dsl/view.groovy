// Implement your views here using the SJS DSL.

/*bean 'testView',
parent:'Project.pane'
*/
form('Project.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:2,
	fields:['name','students','technologies','usesTrainers','technicalTrainers']){
		actionMap{
				actionList('FILE'){
					action(ref:'saveModuleObjectFrontAction')
					action(ref:'reloadModuleObjectFrontAction')
			  }
		}
	}
	
table'Project-students.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
split_vertical'Project.proj.view',
	model:'Project',
	top:'Project.pane',
	bottom:'Project-students.table'


 

	 
form('Student.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:2){
		actionMap{
				actionList('FILE'){
					action(ref:'saveModuleObjectFrontAction')
					action(ref:'reloadModuleObjectFrontAction')
			  }
		}
	}
	
table'Student-technologies.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
split_vertical'Student.proj.view',
	model:'Student',
	top:'Student.pane',
	bottom:'Student-technologies.table'

form('Trainer.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:5)

form('Technology.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:5)

