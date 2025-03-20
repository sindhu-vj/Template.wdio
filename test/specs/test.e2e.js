import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.js'

describe('Positive Test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await LoginPage.open()
        await LoginPage.login('problem_user', 'secret_sauce')

        await LoginPage.open()
        await LoginPage.login('performance_glitch_user', 'secret_sauce')

        await LoginPage.open()
        await LoginPage.login('error_user', 'secret_sauce')

        await LoginPage.open()
        await LoginPage.login('visual_user', 'secret_sauce')
      
    })
})