import { takeEvery, put, select } from 'redux-saga/effects';
import characterCreationActions from 'core/characterCreation/actions';
import partyActions from 'core/party/actions';

function* addCharacter(action) {
  const party = yield select(state => state.party.characters);
  const stats = {
    ...action.payload,
    id: party.length + 1,
    HP_MAX: parseInt((50 + action.payload.STR * 3) / 2, 10),
    MP_MAX: parseInt(action.payload.INT * 3, 10),
    buffs: [],
    debuffs: [],
  };
  stats.HP_CUR = stats.HP_MAX;
  stats.MP_CUR = stats.MP_MAX;

  try {
    if (party.length >= 5) {
      return;
    }

    yield put(partyActions.addCharacter(stats));
  } catch (e) {
    console.log(e);
  }
}

export default [takeEvery(characterCreationActions.ADD_CHARACTER, addCharacter)];