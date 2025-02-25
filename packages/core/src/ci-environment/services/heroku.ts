import type { Service } from "../types";

const service: Service = {
  name: "Heroku",
  detect: ({ env }) => Boolean(env.HEROKU_TEST_RUN_ID),
  config: ({ env }) => ({
    commit: env.HEROKU_TEST_RUN_COMMIT_VERSION || null,
    branch: env.HEROKU_TEST_RUN_BRANCH || null,
    owner: null,
    repository: null,
    jobId: null,
    runId: null,
    prNumber: null,
    prHeadCommit: null,
  }),
};

export default service;
