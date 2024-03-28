import Team from '../set';

const characterTeam = new Team();
const kobiche = {
  name: 'Artem',
  type: 'Mag',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};
const bossian = {
  name: 'Artem',
  type: 'Bowerman',
  health: 100,
  level: 1,
  attack: 30,
  defence: 25,
};
const checkSet = new Set();
checkSet.add(kobiche);
checkSet.add(bossian);

test('test method add', () => {
  characterTeam.add(kobiche);
  characterTeam.add(bossian);
  const result = characterTeam.members;
  expect(result).toEqual(checkSet);
});

test('test method add Error', () => {
  expect(() => characterTeam.add(kobiche)).toThrow(Error);
});

test('test method addAll', () => {
  characterTeam.addAll(kobiche, bossian);
  const result = characterTeam.members;
  expect(result).toEqual(checkSet);
});

test('test method addAll no added', () => {
  characterTeam.addAll(kobiche, bossian);
  characterTeam.addAll(kobiche, bossian);
  const result = characterTeam.members;
  expect(result).toEqual(checkSet);
});

test('test method toArray', () => {
  expect(characterTeam.toArray()).toEqual([kobiche, bossian]);
});
