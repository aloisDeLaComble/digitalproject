// Implement your domain here using the SJS DSL.


Entity ('Project'){
	string_64 'name'
	set 'technologies', composition:true, ref:'Technology'
	set 'technicalTrainers', composition:true, ref:'Trainer'
	set 'usesTrainers', composition:true, ref:'Trainer'
	set 'students', composition:true, ref:'Student'
}

Entity ('Technology'){
	string_64 'name'
	set 'projects', ref:'Project', reverse:'Project-technologies'
	set 'studentsAbleToUseIt', ref:'Technology', reverse:'Student-technologies'
	set 'trainersAbleToTeachIt', ref:'Technology', reverse:'Trainer-technologies'
}

Interface ('Person'){
	string_64 'lastname'
	string_64 'firstname'
}

Entity ('Trainer',
		extend: 'Person'){
	set 'projectsAsTechnicalTrainer', ref:'Project', reverse:'Project-technicalTrainers'
	set 'projectsAsUsesTrainer', ref:'Project', reverse:'Project-usesTrainers'
	set 'technologies', composition:true, ref:'Technology'
}

Entity ('Student',
		extend: 'Person'){
	set 'technologies', composition:true, ref:'Technology'
	set 'projects', ref:'Project', reverse:'Project-students'
}

