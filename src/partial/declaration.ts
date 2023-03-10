/*
 * Copyright (c) 2023-present NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import { SignatureReflection } from "typedoc";
import { RenderContext } from "../DocumentRenderer";
import { block } from "../utils";
import { memberSignatureTitle } from "./member.signature.title";

export function declaration(signature: SignatureReflection, ctx: RenderContext) {
  const desc = memberSignatureTitle(signature, {
    ...ctx,
    includeLink: false,
    simplify: false,
    oneLine: true
  });

  return block(desc, "ts");
}
