import {
    combineReducers,
    configureStore,
    PreloadedState,
} from '@reduxjs/toolkit';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
    // Here we place all our slices
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
