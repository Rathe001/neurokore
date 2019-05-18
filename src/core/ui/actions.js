const uiActions = {
  TOGGLE_SPLASH: 'UI_TOGGLE_SPLASH',
  TOGGLE_SPLASH_SUCCESS: 'UI_TOGGLE_SPLASH_SUCCESS',
  TOGGLE_SPLASH_FAILURE: 'UI_TOGGLE_SPLASH_FAILURE',
  toggleSplash: () => ({
    type: uiActions.TOGGLE_SPLASH,
  }),

  TOGGLE_CHARACTER_CREATION: 'UI_TOGGLE_CHARACTER_CREATION',
  TOGGLE_CHARACTER_CREATION_SUCCESS: 'UI_TOGGLE_CHARACTER_CREATION_SUCCESS',
  TOGGLE_CHARACTER_CREATION_FAILURE: 'UI_TOGGLE_CHARACTER_CREATION_FAILURE',
  toggleCharacterCreation: () => ({
    type: uiActions.TOGGLE_CHARACTER_CREATION,
  }),
};

export default uiActions;