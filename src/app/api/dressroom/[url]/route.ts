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

    const scrapedData = await page.evaluate(() => {
      const getMetaContent = (property: string) => {
        const meta = document.querySelector(`meta[property="${property}"]`);
        return meta ? meta.getAttribute("content") : null;
      };

      const getCategory = () => {
        const description = getMetaContent("og:description");
        if (description) {
          const match = description.match(/제품분류\s*:\s*([^\s>]+)/);
          return match ? match[1] : null;
        }
        return null;
      };

      return {
        site: window.location.href,
        name: getMetaContent("og:title")?.split(" - ")[0],
        image: getMetaContent("og:image"),
        price: parseInt(getMetaContent("product:price:amount") || "0"),
        category: getCategory(),
        brand: getMetaContent("product:brand"),
      };
    });

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
