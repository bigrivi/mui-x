import renameProps from '../../../util/renameProps';
import type { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions;

  return renameProps({
    root,
    componentNames: ['TreeView'],
    props: {
      expanded: 'expandedNodes',
      defaultExpanded: 'defaultExpandedNodes',
      onNodeToggle: 'onExpandedNodesChange',
    },
    j,
  }).toSource(printOptions);
}
