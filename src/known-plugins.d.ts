import { CustomClass } from './plugins/custom-class/prism-custom-class';
import { FileHighlight } from './plugins/file-highlight/prism-file-highlight';
import { FilterHighlightAll } from './plugins/filter-highlight-all/prism-filter-highlight-all';
import { JsonpHighlight } from './plugins/jsonp-highlight/prism-jsonp-highlight';
import { LineNumbers } from './plugins/line-numbers/prism-line-numbers';
import { NormalizeWhitespace } from './plugins/normalize-whitespace/prism-normalize-whitespace';
import { Toolbar } from './plugins/toolbar/prism-toolbar';

declare interface KnownPlugins {
	customClass: CustomClass;
	fileHighlight: FileHighlight;
	filterHighlightAll: FilterHighlightAll;
	jsonpHighlight: JsonpHighlight;
	lineNumbers: LineNumbers;
	normalizeWhitespace: NormalizeWhitespace;
	toolbar: Toolbar
}
