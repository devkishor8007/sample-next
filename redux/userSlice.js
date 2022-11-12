import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  home: "Interactive Experience: Running npx create-next-app@latest (with no arguments) launches an interactive experience that guides you through setting up a project. Zero Dependencies: Initializing a project is as quick as one second. Create Next App has zero dependencies, Offline Support: Create Next App will automatically detect if you're offline and bootstrap your project using your local package cache.",
  description:
    "Next.js 13 was recently released, learn more and see the upgrade guide. Version 13 also introduces beta features like the app directory that works alongside the pages directory (stable) for incremental adoption. You can continue using pages in Next.js 13, but if you want to try the new app features, see the new beta docs.",
};

const userSlice = createSlice({
  name: "moon",
  initialState: initialState,
  reducers: {},
});

export default userSlice.reducer;
