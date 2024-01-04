import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('Validate card form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('Create widget', () => {
    test('Should add .hidden class', async () => {
      await page.goto(baseUrl);
      const documentBody = document.body;
      const button = await documentBody.$('[id=button]');
      button.click();
      await page.waitForSelector('[id=widget].hidden');
    });
  });
});