/*
 * Copyright (c) 2023-present NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import * as TypeDoc from "typedoc";
import DocumentItem from "./DocumentTemplate";
import { KIND_NAME } from "../const";
import { block, hasTypeParameters, name } from "../utils";
import { typeParameters } from "../partial/typeParameters";
import { RenderContext } from "../DocumentRenderer";
import { renderType } from "../partial/type";
import { declaration } from "../partial/declaration";
import { params } from "../partial/params";
import { comment } from "../partial/comment";

class Declaration implements DocumentItem {
  public render(item: TypeDoc.DeclarationReflection, ctx: RenderContext) {
    if (item.kindOf(TypeDoc.ReflectionKind.Function)) {
      return this._renderFunction(item, ctx);
    }

    const header = [
      this._kindName(item),
      this._itemName(item, ctx)
    ];

    if (item.extendedTypes) {
      header.push(this._extendedType(item.extendedTypes, ctx));
    }

    if (item.implementedTypes) {
      header.push(this._implementedType(item.implementedTypes, ctx));
    }

    if (item.defaultValue) {
      header.push(`: ${renderType(item.type, ctx, { includeLink: false })}`);
    }

    if (item.kindOf(TypeDoc.ReflectionKind.TypeAlias)) {
      header.push(` = ${renderType(item.type, ctx, { includeLink: false })}`);
    }

    return block(header.filter(val => !!val).join(""), "ts");
  }

  private _kindName(item: TypeDoc.DeclarationReflection) {
    if (item.kind === TypeDoc.ReflectionKind.Project) return null;
    const kindString = KIND_NAME[item.kind] ?? item.kindString ?? "";
    const abstract = item.flags.isAbstract ? "abstract " : "";

    return `${abstract}${kindString}`;
  }

  private _itemName(item: TypeDoc.DeclarationReflection, ctx: RenderContext) {
    if (hasTypeParameters(item)) {
      return ` ${name(item)}<${typeParameters(item.typeParameters, ctx, false)}>`;
    } else {
      return ` ${name(item)}`;
    }
  }

  private _extendedType(parents: TypeDoc.SomeType[], ctx: RenderContext) {
    if (!parents.length) return null;

    return ` extends ${parents.map(item => renderType(item, ctx, { includeLink: false })).join(", ")}`;
  }

  private _implementedType(parents: TypeDoc.SomeType[], ctx: RenderContext) {
    if (!parents.length) return null;

    return ` implements ${parents.map(item => renderType(item, ctx, { includeLink: false })).join(", ")}`;
  }

  private _renderFunction(item: TypeDoc.DeclarationReflection, ctx: RenderContext) {
    const signatures = item.signatures ?? [];
    const signature = signatures[signatures.length - 1];

    const items = [
      declaration(signature, ctx),
      params(signature, ctx),
      comment(signature, ctx)
    ];

    return items.filter(val => !!val).join("\n\n");
  }
}

export default Declaration;
