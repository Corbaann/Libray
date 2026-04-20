function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => { level++; };
  return { name, getReputation, giveReputation, increaseLevel };
}
const Phil=createPlayer(Phil)
Phil.increaseLevel();
Phil.increaseLevel();

console.log({
    name:Phil.name,
    increaseLevel:Phil.increaseLevel()
});


