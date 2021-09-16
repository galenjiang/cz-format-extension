import * as inquirer from "inquirer";
import { initialize, getGitInfo } from "./util";
import { CZ, Commit } from "./types";

export const engine = () => {
  const { config } = initialize();

  const prompter = (cz: CZ, commit: Commit) => {
    return getGitInfo().then(async ({ gitInfo }) => {
      if (config.questions === undefined)
        throw new Error("Could not find questions.");

      console.log(1111, 'answers')
      const questions = await config.questions({ inquirer, gitInfo })
      console.log(questions)
      return cz
        .prompt(questions)
        .then((answers) => {
          if (config.commitMessage === undefined)
            throw new Error("Could not find commitMessage.");

          const commitMessage = config.commitMessage({ answers, gitInfo });

          if (typeof commitMessage !== "string")
            throw new Error("commitMessage should return string.");

          commit(commitMessage);
        });
    });
  };

  return {
    prompter,
  };
};
