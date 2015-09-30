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

/*
form('Project.module.view',
	parent:'decoratedView',
	columnCount:1){
		
		}
	  }
*/
	
table'Project-students.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
split_vertical'Project.proj.view',
	model:'Project',
	top:'Project.pane',
	bottom:'Project-students.table'


/*table('Project.module.view',
	parent:'Project.proj.view')	
*/	
/*table'Project-students.table',
	 parent:'decoratedView',
	 actionMap:'masterDetailActionMap'
*/	 


 

	 
form('Student.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:5)

form('Trainer.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:5)

form('Technology.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	columnCount:5)


	
	/*
form 'Student.pane',
	parent:'decoratedView',
	labelsPosition:'ABOVE',
	columnCount:2*/
	
	/*
table 'Project-students.table',
  parent:'decoratedView'*/
  
/*split_vertical'Project.organization.view',
  model:'Company',
  top
:'Company.tab.pane',
  bottom
:'Company-departments.table'
*/
	
	


/*split_vertical('project.view', 
				actionMap:'beanModuleActionMap',
				bean 'testView',
parent:'project.view'){
	top {
		form(model:'Project')
	}
	bottom {
		form(model:'Project-technologies')
	}
}
*/