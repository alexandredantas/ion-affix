/**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
var /**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
ContentAdapter = (function () {
    function ContentAdapter(content) {
        this.content = content;
    }
    ContentAdapter.prototype.onScroll = function () {
        return this.content.ionScroll;
    };
    ContentAdapter.prototype.getClientTop = function () {
        return this.content.getScrollElement().getBoundingClientRect().top;
    };
    ContentAdapter.prototype.getScrollTop = function () {
        return this.content.getScrollElement().scrollTop;
    };
    ContentAdapter.prototype.appendFixedHeader = function (headerElement) {
        this.content.getNativeElement().appendChild(headerElement);
    };
    ContentAdapter.prototype.isScrollingDown = function () {
        return this.content.directionY === 'down';
    };
    return ContentAdapter;
}());
/**
 * Adapter for ion-content.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
export { ContentAdapter };
//# sourceMappingURL=content-adapter.js.map