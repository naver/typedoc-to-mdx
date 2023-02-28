/*
 * Copyright (c) 2023-present NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import fs from "fs-extra";
import path from "path";
import { ReflectionKind } from "typedoc";
import CLICommand from "./CLICommand";
import MDXGenerator from "./MDXGenerator";
import TypeDocRunner from "./TypeDocRunner";

const main = async () => {
  const command = new CLICommand();
  const options = command.getOptions();
  const runner = new TypeDocRunner({
    typedoc: options.typedoc,
    tsconfig: options.tsconfig
  });

  const projectRoot = await runner.run();
  const subProjects = projectRoot.getChildrenByKind(ReflectionKind.Module);

  if (subProjects.length > 0) {
    // clear original outDir
    fs.rmSync(options.outDir, { recursive: true, force: true });

    for (const subProject of subProjects) {
      const mdxGenerator = new MDXGenerator(subProject, {
        ...options,
        outDir: path.join(options.outDir, subProject.name)
      });
      mdxGenerator.writeDocuments();
    }
  } else {
    const mdxGenerator = new MDXGenerator(projectRoot, options);
    mdxGenerator.writeDocuments();
  }
};

main();
