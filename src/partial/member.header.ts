/*
 * Copyright (c) 2023-present NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import { DeclarationReflection, SignatureReflection } from "typedoc";
import { RenderContext } from "../DocumentRenderer";
import { commentDisplayText, escape } from "../utils";
import { renderType } from "./type";

export const memberHeader = (
  item: DeclarationReflection | SignatureReflection,
  ctx: RenderContext
) => {
  const items = [
    `<summary className="${ctx.classPrefix}-member">`,
    `<span className="${ctx.classPrefix}-name">${item.name}</span>`,
    `<span className="${ctx.classPrefix}-type">`,
    escape(renderType(item.type, ctx, { oneLine: true }).replace(/\n/g, " ").replace(/\s{2,}/, " ")),
    "</span>",
  ];

  const defaultTag = item.comment?.blockTags.find(tag => tag.tag === "@default");
  if (defaultTag) {
    const defaultVal = commentDisplayText(defaultTag.content, ctx);

    items.push(
      `<span className="${ctx.classPrefix}-default" title="Default Value"><p>${defaultVal}</p></span>`
    );
  }

  items.push("</summary>");

  return items.join("\n\n");
};


