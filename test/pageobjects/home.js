import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    

    get productsHeader() {
        return $('span.title')
    }


}

export default new HomePage();
