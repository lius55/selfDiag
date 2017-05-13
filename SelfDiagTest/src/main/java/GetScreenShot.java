package main.java;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;
import java.util.concurrent.TimeUnit;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

public class GetScreenShot {

	protected WebDriver driver;

	protected String url;

	private static final String OUTPUT_PICTER_PATH = "C:/tmp/selenium/screenshot";

	private static final String SHEET_NAME = "script";

	private static final String URL = "http://localhost/selfDiag/";

	/**
	 * ChromeのWebDriver取得
	 */
	private WebDriver getChromeDriver() {
		System.setProperty("webdriver.chrome.driver","src/main/resources/chromedriver.exe");
//		System.setProperty("webdriver.chrome.driver", "C:\\devs\\workspace\\SelfDiagTest\\src\\main\\resources\\chromedriver.exe");
		return new ChromeDriver();
	}

	@Before
	public void setUp() throws Exception {
		driver = getChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Test
	public void test() throws Exception {

		File currentDirectory = new File(".");
		String filePath = currentDirectory.getAbsolutePath() + "/src/main/resources/sd.xls";

		FileInputStream fileInputStream = new FileInputStream(filePath);
		BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);
		POIFSFileSystem poiFileSystem = new POIFSFileSystem(bufferedInputStream);
		HSSFWorkbook workbook = new HSSFWorkbook(poiFileSystem);
		Sheet sheet = workbook.getSheet(SHEET_NAME);
		// row番号は0から始まる
		for (int r = 2; r <= 145; r++) {

			Row row = sheet.getRow(r);

			driver.get(URL);
			driver.findElement(By.xpath("//*[@id=\"start-section\"]/div[4]")).click();
			Thread.sleep(100);


			for (int c = 1; c <= 155; c++) {
				if (row.getCell(c).getStringCellValue().equals("Y")) {
					driver.findElement(By.xpath("//*[@id=\"question-section\"]/div[5]/div[1]")).click();
				} else {
					driver.findElement(By.xpath("//*[@id=\"question-section\"]/div[5]/div[2]")).click();
				}
				Thread.sleep(20);
			}
			driver.findElement(By.xpath("//*[@id=\"result-section\"]/div/div/div[13]")).click();
			Thread.sleep(500);

//			// 一枚収めない場合、複数枚キャプチャ取ります
//			int height = driver.findElement(By.xpath("/html/body")).getSize().getHeight();
//			// ブラウザのタイトルの高さを引きます
//			int windowHeight = driver.manage().window().getSize().getHeight() - 150;
//			for(int i = 0; i < height / windowHeight + 1; i++) {
//				((JavascriptExecutor)driver).executeScript("window.scrollTo(0," + (i*windowHeight) + ");");
//				Thread.sleep(1000);
//				// 画像を保存
//				takeScreenshot(String.valueOf(r-1) + "_" + i);
//			}
		}
	}

	/**
	 * 画面スクリーンショット
	 * @param pictureName 保存ファイル名
	 */
	protected void takeScreenshot(String pictureName) {

		String newDirPath = OUTPUT_PICTER_PATH + File.separator + "sd";
		File newdir = new File(newDirPath);

		if (!newdir.exists()) {
			newdir.mkdirs();
		}

		try {
			if (this.driver instanceof TakesScreenshot) {

				File f = ((TakesScreenshot) this.driver).
					getScreenshotAs(OutputType.FILE);

				File t = new File(newDirPath + File.separator + pictureName + ".png");

				FileChannel src;
				src = new FileInputStream(f).getChannel();
				FileChannel target;
				target = new FileOutputStream(t).getChannel();
				src.transferTo(0, src.size(), target);
			}
		} catch (IOException e) {
			e.printStackTrace();
		} catch (WebDriverException e) {
			System.out.println("キャプチャの取得に失敗");
		}
	}

}
