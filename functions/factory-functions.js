const name = "Bob";
const age = 28;
const color = "red";

const nowFancyObject = { name, age, color };

console.log({ name, age, color });
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);

function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => { reputation++; };

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();
josh.giveReputation();

// logs { discordName: "@josh", reputation: 2 }
console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation()
});
