type Theme = "light" | "dark";
export interface LayoutState {
    theme: Theme;
}
declare const layoutSlice: import("@reduxjs/toolkit").Slice<LayoutState, {
    toggleTheme: (state: import("immer/dist/internal").WritableDraft<LayoutState>, action: {
        payload: any;
        type: string;
    }) => void;
}, "layout">;
export declare const toggleTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "layout/toggleTheme">;
export { layoutSlice };
export default layoutSlice;
