/*
 * Copyright (c) 2023-present NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import * as TypeDoc from "typedoc";
import DocumentItem from "./DocumentTemplate";
import { RenderContext } from "../DocumentRenderer";
import { commentText } from "../utils";

class MainDescription implements DocumentItem {
  public render(item: TypeDoc.DeclarationReflection, ctx: RenderContext) {
    const comment = this._getComment(item);

    if (!comment) return "";

    const text = commentText(comment, ctx);

    return `<div className="${ctx.classPrefix}-subtitle">\n\n${text}\n\n</div>`;
  }

  private _getComment(item: TypeDoc.DeclarationReflection) {
    if (item.hasComment()) return item.comment!;

    const signatures = item.getAllSignatures();
    const signatureWithComment = signatures.find(signature => signature.hasComment());

    if (!signatureWithComment) return null;

    return signatureWithComment.comment!;
  }
}

export default MainDescription;
