// Implement your domain here using the SJS DSL.

Interface('Traceable',
	interceptors: 'TraceableLifecycleInterceptor',
	uncloned: ['createTimestamp',
			   'lastUpdateTimestamp','lastUpdatedBy','createdBy']) {
  string_64 'createdBy',readOnly:true
  date_time 'createTimestamp', timeZoneAware: true, readOnly: true
  string_64 'lastUpdatedBy', readOnly:true
  date_time 'lastUpdateTimestamp', timeZoneAware: true, readOnly: true
}

Entity ('Project', extend:'Traceable',toString:'name',
	rendered: ['name','lastUpdateTimestamp','lastUpdatedBy','createTimestamp','createdBy'],
	queryable: ['name']){
	string_64 'name'
	set 'technologies', composition:true, ref:'Technology'
	set 'technicalTrainers', composition:true, ref:'Trainer'
	set 'usesTrainers', composition:true, ref:'Trainer'
	set 'students', composition:true, ref:'Student'
	
}

Entity ('Technology', extend:'Traceable',toString:'name',
	rendered: ['name','lastUpdateTimestamp','lastUpdatedBy','createTimestamp','createdBy'],
	queryable: ['name']){
	string_64 'name'
	set 'projects', ref:'Project', reverse:'Project-technologies'
	set 'studentsAbleToUseIt', ref:'Technology', reverse:'Student-technologies'
	set 'trainersAbleToTeachIt', ref:'Technology', reverse:'Trainer-technologies'
}

Interface ('Person', extend:'Traceable'){
	string_64 'lastname'
	string_64 'firstname'
	date_time 'createTimestamp', timeZoneAware: true, readOnly: true
	date_time 'lastUpdateTimestamp', timeZoneAware: true, readOnly: true
}

Entity ('Trainer',
		extend: 'Person', 
		toString:'firstname',
		rendered: ['firstname','lastname','lastUpdateTimestamp','lastUpdatedBy','createTimestamp','createdBy'],
		queryable: ['firstname','lastname']){
	set 'projectsAsTechnicalTrainer', ref:'Project', reverse:'Project-technicalTrainers'
	set 'projectsAsUsesTrainer', ref:'Project', reverse:'Project-usesTrainers'
	set 'technologies', composition:true, ref:'Technology'
	date_time 'createTimestamp', timeZoneAware: true, readOnly: true
	date_time 'lastUpdateTimestamp', timeZoneAware: true, readOnly: true
}

Entity ('Student',
		extend: 'Person', 
		toString:'firstname',
		rendered: ['firstname','lastname','lastUpdateTimestamp','lastUpdatedBy','createTimestamp','createdBy'],
		queryable: ['firstname','lastname']){
	set 'technologies', composition:true, ref:'Technology'
	set 'projects', ref:'Project', reverse:'Project-students'
	date_time 'createTimestamp', timeZoneAware: true, readOnly: true
	date_time 'lastUpdateTimestamp', timeZoneAware: true, readOnly: true
}
		
