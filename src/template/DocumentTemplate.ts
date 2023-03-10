/*
 * Copyright (c) 2023-present NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import * as TypeDoc from "typedoc";
import { RenderContext } from "../DocumentRenderer";

interface DocumentPartial {
  render(item: TypeDoc.Reflection, ctx: RenderContext): string | null;
}

export default DocumentPartial;
