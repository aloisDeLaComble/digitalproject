// Implement your application frontend here using the SJS DSL.

/*
 * The workspaces and modules
 * 
 * 
 * viewFactoryBase
 * 
 * abstractViewFactory
 * 
 */

// Describe your workspaces and modules here.


		

bean 'viewFactoryBase', parent:'abstractViewFactory',
custom: [
  defaultActionMapRenderingOptions:'LABEL_ICON'
]


/*
controller 'digitalproject.name',
icon:'icon.png',
context:'digitalproject',
language:'en',
workspaces:[
  //'digitalproject.workspace'
]*/


workspace('proj.workspace'){
		filterModule('proj.projects.module',
				component:'Project',
				detailView:'Project.proj.view'
				)
		filterModule('proj.students.module',
			component:'Student',
			detailView:'Student.proj.view')
		filterModule('proj.trainers.module',
			component:'Trainer',
			detailView:'Trainer.proj.view')
		filterModule('proj.technologies.module',
			component:'Technology',
			detailView:'TechnologyInfo.tab.pane')
		filterModule('proj.companies.module',
			component:'Company',
			detailView:'CompanyInfo.tab.pane')
		filterModule('proj.years.module',
			component:'Year')
 }



controller 'digitalproject.name',
icon:'icon.png',
context:'digitalproject',
language:'en',
workspaces:['proj.workspace']
