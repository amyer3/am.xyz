import store from './stateStore'

export const LANG = 'LANG';
export const MODE = 'MODE';
export const boundChangeMode = currentState => store.dispatch(changeMode(currentState));
export const boundChangeLang = currentState => store.dispatch(changeLang(currentState));
export const VIEW_MODES = {
    day: 'day',
    night: 'night'
};
export const LANG_MODES = {
    en: 'en',
    fr: 'fr'
};

//ACTION CREATORS
export function changeMode(currentState = store.getState()){
    return {
        type: MODE,
        mode: currentState.mode === 'day' ? 'night' : 'day'
    }
}

export function changeLang(currentState = store.getState()){
    return {
        type: LANG,
        lang: currentState.lang=== 'en' ? 'fr' : 'en'
    }
}