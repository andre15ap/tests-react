import reducer, { INITIAL_STATE } from '../../store/modules/techs/reducer';
import { addTech } from '../../store/modules/techs/actions';

describe('Techs reducer', () => {
    it('ADD_TECH', () => {
        const state = reducer(INITIAL_STATE, addTech('Node.js'));

        expect(state).toStrictEqual(['Node.js']);
    })
});