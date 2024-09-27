import puppeteer from "puppeteer";

export async function GET(
  req: Request,
  { params }: { params: { url: string } },
) {
  const startTime = Date.now();
  try {
    const decodedUrl = decodeURIComponent(params.url);

    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(decodedUrl);

    const scrapedData = await page.evaluate((url) => {
      const productImageElement = document.querySelector(
        ".sc-8j14dt-7.xxnjM img",
      );
      const productNameElement = document.querySelector(
        ".sc-ysl0re-1.iROunM .text-lg",
      );
      const productPriceElement = document.querySelector(
        ".sc-xz8kdb-4.iccpET .text-lg.font-semibold.text-black",
      );
      const productCategoryElement = document.querySelector(
        ".sc-147svlx-1.dqyZQF a",
      );

      if (
        productImageElement &&
        productNameElement &&
        productPriceElement &&
        productCategoryElement
      ) {
        return {
          site: window.location.href,
          name: productNameElement.textContent?.trim(),
          image: (productImageElement as HTMLImageElement).src,
          price: parseInt(
            productPriceElement.textContent?.replace(/[^0-9]/g, "") || "0",
          ),
          category: productCategoryElement.textContent?.trim(),
        };
      }
      return null;
    }, decodedUrl);

    await browser.close();

    const endTime = Date.now();
    const executionTime = endTime - startTime;

    console.log(`실행 시간: ${executionTime}ms`);

    return Response.json({ data: scrapedData, executionTime });
  } catch (error: any) {
    const endTime = Date.now();
    const executionTime = endTime - startTime;

    console.error("Error:", error);
    console.log(`오류 발생 시간: ${executionTime}ms`);

    return Response.json(
      { error: error.message, executionTime },
      { status: 500 },
    );
  }
}
