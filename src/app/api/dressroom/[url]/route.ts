import puppeteer from "puppeteer";

export const GET = async (
  req: Request,
  { params }: { params: { url: string } },
) => {
  try {
    const { url } = params;
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto(url);
    const scrapedData = await page.evaluate(() => {});
    await browser.close();
    return;
  } catch (error: any) {
    return Response.json({ error: error.message });
  }
};
