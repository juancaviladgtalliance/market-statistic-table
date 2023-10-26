import { configureStore } from "@reduxjs/toolkit";
import filterSlicer from "./features/filterslicer";
import tableslicer from "./features/tableslicer";
import iusSlicer from "./features/iusSlicer";

export const store = configureStore({
  reducer: {
    filters: filterSlicer,
    tables: tableslicer,
    ius: iusSlicer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
