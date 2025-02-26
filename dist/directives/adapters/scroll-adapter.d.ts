import { IonAffixContainer } from '../ion-affix-container';
import { Scroll } from 'ionic-angular';
import { Observable } from 'rxjs';
/**
 * Adapter for ion-scroll.
 *
 * @author Jonas Zuberbuehler <jonas.zuberbuehler@gmail.com>
 */
export declare class ScrollAdapter implements IonAffixContainer {
    scroll: Scroll;
    scrollingDown: boolean;
    constructor(scroll: Scroll);
    onScroll(): Observable<any>;
    getClientTop(): number;
    getScrollTop(): number;
    appendFixedHeader(headerElement: any): void;
    isScrollingDown(): boolean;
}
