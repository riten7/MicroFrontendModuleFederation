declare const Store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    layout: import("./reducer").LayoutState;
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    layout: import("./reducer").LayoutState;
}>, import("redux").AnyAction>]>;
export { Store };
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export declare const useAppDispatch: () => import("@reduxjs/toolkit").ThunkDispatch<import("redux").CombinedState<{
    layout: import("./reducer").LayoutState;
}>, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export default Store;
