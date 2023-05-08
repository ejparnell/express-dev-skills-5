const skills = [
  {
    id: 1,
    name: "JavaScript",
    description:
      "Proficient in JavaScript programming language for web development.",
    level: "Advanced",
  },
  {
    id: 2,
    name: "Express",
    description:
      "Experienced in building web applications using Express framework.",
    level: "Advanced",
  },
  {
    id: 3,
    name: "Node.js",
    description:
      "Proficient in building scalable and efficient server-side applications using Node.js.",
    level: "Advanced",
    
  },
  {
    id: 4,
    name: "Debugging",
    description: "Skilled at debugging code and identifying and fixing errors.",
    level: "Advanced",
  },
  
];


function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now();
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id)
  skills.splice(idx, 1)
}

function update(id, updatedSkill) {
	id = parseInt(id)
	const skill = skills.find((skill) => skill.id === id)
	// Wonderful work here let's just break down what is happening here and why we cannot update
	// Take a look at the following console.logs (encourage you to run these and see the flow yourself :))
	console.log('I am the skill that was found', skill)
	// {
	//     id: 'JavaScript',
	//     description: 'Most widely used language for web development',
	//     level: 'Advanced'
	// }
	console.log('I am the user input to update that skill', updatedSkill)
	// {
	//     skill: 'User input here'
	// }

	// Besides the `id` which we do not want to change these objects have very different key/value pairs
	// In your `skill` object you have the key `description` but in your user input you have the key `skill`
	// With Object.assign these keys need to be named the same thing in order to replace a value of the key
	Object.assign(skill, updatedSkill)

	// There are 2 ways we can solve this. Keep the data as in and just use Object.assign to modify what we need
	Object.assign(skill, {
		// changing the `description` key with the value coming in from `updatedSkill.skill`
		description: updatedSkill.skill,
	})

	// Or again the way that is best practice.
	// First change the name attribute in the input form on `edit.ejs` form to be `description`
	// That way our user input is coming in as:
	// {
	//     description: 'User input here',
	// }
	// Then you can use the Object.assign as you were meaning too
	// Object.assign(skill, updatedSkill)
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}