import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "t1nbpupj",
    dataset: "production",
  },
  // * Learn more at https://www.sanity.io/docs/cli#auto-updates
  autoUpdates: true,
});
