import {test , expect} from '@playwright/test'
test('LoginPage',async ({page})=>{
await page.goto('https://staging-seller.techbazaar.pk/login');
await page.fill('#validationCustomEmail','maler87242@coloruz.com')
await page.getByRole('button',{type:'submit'}).click()
await page.fill('#validationCustomPassword','test111')
await page.getByRole('button',{type:'submit'}).click()
await page.goto('https://staging-seller.techbazaar.pk/dashboard')
await page.close();
await new Promise(()=>{})
  await page.pause()

}
)