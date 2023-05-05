const skills = [
  // {
  //   id: 1,
  //   name: "JavaScript",
  //   description:
  //     "Proficient in JavaScript programming language for web development.",
  //   level: "Advanced",
  // },
  // {
  //   id: 2,
  //   name: "Express",
  //   description:
  //     "Experienced in building web applications using Express framework.",
  //   level: "Advanced",
  // },
  // {
  //   id: 3,
  //   name: "Node.js",
  //   description:
  //     "Proficient in building scalable and efficient server-side applications using Node.js.",
  //   level: "Advanced",
    
  // },
  // {
  //   id: 4,
  //   name: "Debugging",
  //   description: "Skilled at debugging code and identifying and fixing errors.",
  //   level: "Advanced",
  // },
  
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
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}