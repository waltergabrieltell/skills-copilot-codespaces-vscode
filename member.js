function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'CSS', 'HTML'],
        salary: 2000,
        bonus: 100,
        getSalary: function () {
            return this.salary + this.bonus;
        }
    };
    console.log(member.getSalary());
    console.log(member.skills);
    console.log(member.skills[0]);
    console.log(member.skills[1]);
    console.log(member.skills[2]);
    console.log(member.skills.length);
    console.log(member.skills[member.skills.length - 1]);
    member.skills.push('React');
    console.log(member.skills);
    member.skills.pop();
    console.log(member.skills);
    member.skills.unshift('React');
    console.log(member.skills);
    member.skills.shift();
    console.log(member.skills);
    member.skills.splice(1, 0, 'NodeJS');
    console.log(member.skills);
    member.skills.splice(2, 1);
    console.log(member.skills);
    member.skills.splice(1, 1, 'NodeJS');
    console.log(member.skills);
    member.skills.splice(1, 2, 'NodeJS', 'React');
    console.log(member.skills);
    member.skills.splice(1, 1, 'NodeJS', 'React');
    console.log(member.skills);
    member.skills.splice(1, 2);
    console.log(member.skills);
    member.skills.splice(1, 0, 'NodeJS', 'React');
    console.log(member.skills);
    member.skills.splice(1, 1);
    console.log(member.skills);
    member.skills.splice(1, 2);
    console.log(member.skills);
    member.skills.splice(1, 0, 'NodeJS', 'React');
    console.log(member.skills);
    member.skills.splice(1, 1);
    console.log(member.skills);
    member.skills.splice(1, 2);
    console.log(member.skills);
    member.skills.splice(1, 0, 'NodeJS', 'React');
    console.log(member.skills);
    member.skills.splice(1, 1);
    console.log(member.skills);
    member.skills.splice(1, 2);
    console.log(member.skills);
    member.skills.splice(1, 0, 'NodeJS', 'React');
    console.log(member.skills);
    member.skills.splice(1, 1);
    console.log(member.skills);
    member.skills.splice(1, 2