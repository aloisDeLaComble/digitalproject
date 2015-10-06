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
	
split_vertical'Project.proj.view',
	model:'Project',
	top:'ProjectInfo.tab.pane',
	bottom:'Project.tab.pane'
	
tabs 'ProjectInfo.tab.pane',
	views:['Project.pane','Traceable.pane']

tabs 'Project.tab.pane',
	views:['Project-students.table','Project-usesTrainers.table','Project-technicalTrainers.table','Project-technologies.table']
	
	

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
	
	


tabs 'StudentInfo.tab.pane',
	views:['Student.pane','Traceable.pane']
	 
form('Student.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	fields:['firstname','lastname','year','photo','projects','technologies'],
	columnCount:2){
		actionMap{
				actionList('FILE'){
					action(ref:'saveModuleObjectFrontAction')
					action(ref:'reloadModuleObjectFrontAction')
			  }
		}
	}

tabs 'Student.tab.pane',
	views:['Student-technologies.table','Student-projects.table']
	


table'Student-projects.table',	
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
		
table'Student-technologies.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
split_vertical'Student.proj.view',
	model:'Student',
	top:'StudentInfo.tab.pane',
	bottom:'Student.tab.pane'

	
	
tabs 'TrainerInfo.tab.pane',
	views:['Trainer.pane','Traceable.pane']
	
form('Trainer.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	fields:['firstname','lastname','photo','projectsAsTechnicalTrainer','projectsAsUsesTrainer'],
	widths:[projectsAsTechnicalTrainer:3,projectsAsUsesTrainer:3],
	columnCount:3){
		actionMap{
				actionList('FILE'){
					action(ref:'saveModuleObjectFrontAction')
					action(ref:'reloadModuleObjectFrontAction')
			  }
		}
	}

tabs 'Trainer.tab.pane',
	views:['Trainer-technologies.table','Trainer-projectsAsTechnicalTrainer.table','Trainer-projectsAsTechnicalTrainer.table']
	
table'Trainer-projectsAsTechnicalTrainer.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
table 'Trainer-projectsAsUsesTrainer.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
table'Trainer-technologies.table',
	parent:'decoratedView',
	actionMap:'masterDetailActionMap'
	
split_vertical'Trainer.proj.view',
	model:'Trainer',
	top:'TrainerInfo.tab.pane',
	bottom:'Trainer.tab.pane'
	
	
	
	

form('Technology.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	fields:['name','projects','students','trainers'],
	columnCount:1)

tabs 'TechnologyInfo.tab.pane',
	views:['Technology.pane','Traceable.pane']


form('Company.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	fields:['name','contactFirstName','contactLastName','email','phoneNumber'],
	widths:[name:2],
	columnCount:2)

tabs 'CompanyInfo.tab.pane',
views:['Company.pane','Traceable.pane']

form('Year.pane',
	parent:'decoratedView',
	labelsPosition:'ASIDE',
	fields:['name','createTimestamp','createdBy','lastUpdateTimestamp','lastUpdatedBy'],
	widths:[name:2],
	columnCount:2)
