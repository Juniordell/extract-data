const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/rocketseat_oficial');
  await page.evaluate(() => {

    const nodeList = document.querySelectorAll('article img')

    const imgArray = [ ...nodeList ]

    const list = imgArray.map(({src}) => ({
        src
    }))

    console.log(list)

  });

//   await browser.close();
})();