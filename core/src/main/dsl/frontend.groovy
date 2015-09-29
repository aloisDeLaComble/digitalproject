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
	//nodeModule('masterdata.entities.module',
	//			icon:'icon.png'){
		filterModule('proj.projects.module',
				component:'Project',
				//filterView:'Project.organization.view',
				detailView:'Project.module.view'
				)
	//}
 }

workspace('stud.workspace'){
	//nodeModule('masterdata.entities.module',
	//			icon:'icon.png'){
		filterModule('stud.students.module',
				component:'Student')
	//}
 }

workspace('train.workspace'){
	//nodeModule('masterdata.entities.module',
	//			icon:'icon.png'){
		filterModule('train.trainers.module',
				component:'Trainer')
	//}
 }

workspace('tech.workspace'){
	//nodeModule('masterdata.entities.module',
	//			icon:'icon.png'){
		filterModule('tech.technologies.module',
				component:'Technology')
	//}
 }
 

controller 'digitalproject.name',
icon:'icon.png',
context:'digitalproject',
language:'en',
workspaces:['proj.workspace','stud.workspace','train.workspace','tech.workspace']


/*controller('digitalproject.controller',
	context:'digitalproject',
	language:'en',
	workspaces:['digitalproject.workspace'])

*/

/*
workspace('digitalproject.workspace'){
	filterModule('project.module',
		component:'Project',
		detailView:'project.view')
}
*/