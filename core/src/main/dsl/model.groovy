// Implement your domain here using the SJS DSL.

Interface('Traceable',
	icon:'traceable.png',
	interceptors: 'TraceableLifecycleInterceptor',
	uncloned: ['createTimestamp',
			   'lastUpdateTimestamp','lastUpdatedBy','createdBy']) {
  string_64 'createdBy',readOnly:true
  date_time 'createTimestamp', timeZoneAware: true, readOnly: true
  string_64 'lastUpdatedBy', readOnly:true
  date_time 'lastUpdateTimestamp', timeZoneAware: true, readOnly: true
}

Interface('Contactable',
	extend:'Traceable'
	){
	string_128 'email', regex:"[\\w\\-\\.]+@[\\w\\-\\.]+", regexSample:'contact@company.com'
	string_128 'phoneNumber', regex:"^((\\+|00)33\\s?|0)[1-9](\\s?\\d{2}){4}\$", regexSample:'06 12 34 56 78'
	}
			   
Entity ('Project', extend:'Traceable',toString:'name',
	icon:'project.png',
	rendered: ['name','company'],
	queryable: ['name','company','students']){
	string_64 'name'
	set 'technologies', composition:true, ref:'Technology'
	set 'technicalTrainers', composition:true, ref:'Trainer'
	set 'usesTrainers', composition:true, ref:'Trainer'
	set 'students', composition:true, ref:'Student'
	reference 'company', ref:'Company'
}

Entity ('Technology', extend:'Traceable',toString:'name',
	icon:'technology.png',
	rendered: ['name'],
	queryable: ['name']){
	string_64 'name'
	set 'projects', ref:'Project', reverse:'Project-technologies'
	set 'students', ref:'Student', reverse:'Student-technologies'
	set 'trainers', ref:'Trainer', reverse:'Trainer-technologies'
}

	

Interface ('Person', extend:'Contactable'){
	string_64 'lastname'
	string_64 'firstname'
	binary 'photo', maxLength:1048576, id:'Employee-photo',
		fileFilter:['images':['.jpg']],
		fileName:'photo.jpg'
}

Entity ('Trainer',
		extend: 'Person', 
		toString:'firstname',
		icon:'trainer.png',
		rendered: ['firstname','lastname','photo','email','phoneNumber'],
		queryable: ['firstname','lastname']){
	set 'projectsAsTechnicalTrainer', ref:'Project', reverse:'Project-technicalTrainers'
	set 'projectsAsUsesTrainer', ref:'Project', reverse:'Project-usesTrainers'
	set 'technologies', composition:true, ref:'Technology'
}

Entity ('Student',
		extend: 'Person', 
		toString:'firstname',
		icon:'student.png',
		rendered: ['firstname','lastname','year','photo','email','phoneNumber'],
		queryable: ['firstname','lastname','year']){
	reference 'year', ref:'Year'
	set 'technologies', composition:true, ref:'Technology'
	set 'projects', ref:'Project', reverse:'Project-students'
}
	
Entity ('Company', extend:'Contactable',toString:'name',
	icon:'company.png',
	rendered: ['name','contactFirstName','contactLastName','email','phoneNumber'],
	queryable: ['name']){
	string_64 'name'
	string_64 'contactFirstName'
	string_64 'contactLastName'
}

Entity('Year', extend:'Traceable',toString:'name',
	icon:'year.png',
	rendered: ['name','lastUpdateTimestamp','lastUpdatedBy','createTimestamp','createdBy'],
	queryable: ['name']){
	string_64 'name'
}