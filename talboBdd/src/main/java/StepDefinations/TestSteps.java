/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package StepDefinations;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 *
 * @author kohli
 */
public class TestSteps {
    
    private static WebDriver driver;
    
    @Given("^user is already on Home Page$")
public void user_is_already_on_Home_Page() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    System.setProperty("webdriver.chrome.driver", "c:\\data\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.talbots.com/homepage");
		driver.manage().window().maximize();
}

@When("^title of Home Page is Talbot$")
public void title_of_Home_Page_is_Talbot() throws Throwable {
    String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Women's Clothing & Apparel | Talbots", title);
    
}

@Then("^user clicks on searchbox and enters \"([^\"]*)\"$")
public void user_clicks_on_searchbox_and_enters(String search) throws Throwable {
   driver.findElement(By.id("q")).click();
    driver.findElement(By.id("q")).clear();
    driver.findElement(By.id("q")).sendKeys(search);
    
}

@Then("^user clicks on submit$")
public void user_clicks_on_submit() throws Throwable {
    driver.findElement(By.name("simpleSearch")).submit();
   
}

@Then("^user clicks on choice$")
public void user_clicks_on_choice() throws Throwable {
    driver.findElement(By.xpath("//img[@alt='Organic True Cotton Tonal Striped Sleep Shirt']")).click();
    Thread.sleep(4000);
}

@Then("^user sees item details$")
public void user_sees_item_details() throws Throwable {
    String title = driver.getTitle();
    Assert.assertEquals(title , "Organic True Cotton Tonal Striped Sleep Shirt | Haven Well Within");
//    driver.quit();
    
}

@Given("^user is on Talbot$")
public void user_is_on_Talbot() throws Throwable {
   driver.get("https://www.talbots.com/homepage");
    
}

@When("^user clicks on Store Locator$")
public void user_clicks_on_Store_Locator() throws Throwable {
   driver.findElement(By.linkText("Store Locator")).click();
   
}

@Then("^user selects distance$")
public void user_selects_distance() throws Throwable {
    Thread.sleep(2000);
     driver.findElement(By.id("distance")).click();
    new Select(driver.findElement(By.id("distance"))).selectByVisibleText("30 Miles");
  
}

@Then("^user enters \"([^\"]*)\" and clicks find stores$")
public void user_enters_and_clicks_find_stores(String zipcode) throws Throwable {
   driver.findElement(By.id("address")).click();
    driver.findElement(By.id("address")).clear();
    driver.findElement(By.id("address")).sendKeys(zipcode);
    driver.findElement(By.xpath("//form[@id='store-search-form']/fieldset/div[3]/button/span")).click();
    
}

@Then("^user clicks on first choice$")
public void user_clicks_on_first_choice() throws Throwable {
    Thread.sleep(1000);
   driver.findElement(By.xpath("//div[@id='00264']/div[2]/a/span")).click();
  	
    
}

@Then("^user can see location detail$")
public void user_can_see_location_detail() throws Throwable {
    String title = driver.getTitle();
    Assert.assertEquals(title, "Store Location Details | Talbots");
//    driver.quit();
}

@Given("^user is on Talbot page$")
public void user_is_on_Talbot_page() throws Throwable {
  driver.get("https://www.talbots.com/");
  
    
}

@When("^user scrolls down and clicks giftcard link$")
public void user_scrolls_down_and_clicks_giftcard_link() throws Throwable {
	Thread.sleep(5000);
     driver.findElement(By.xpath("//a[contains(text(),'Gift Cards')]")).click();
   
}

@Then("^user clicks hundred dollar amount$")
public void user_clicks_hundred_dollar_amount() throws Throwable {
	((JavascriptExecutor)driver).executeScript("scroll(0,400)");
	
  driver.findElement(By.xpath("//button[contains(text(),'$100.00')]")).click();
	Thread.sleep(5000);
   
}

@Then("^user clicks personalize and types in \"([^\"]*)\"$")
public void user_clicks_personalize_and_types_in(String message) throws Throwable {
   driver.findElement(By.xpath("//form[@id='GiftCertificateForm']/fieldset/div/div")).click();
    driver.findElement(By.id("dwfrm_giftcert_purchase_message")).click();
    driver.findElement(By.id("dwfrm_giftcert_purchase_message")).clear();
     driver.findElement(By.id("dwfrm_giftcert_purchase_message")).sendKeys(message);
}

@Then("^user clicks add to bag$")
public void user_clicks_add_to_bag() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   ((JavascriptExecutor)driver).executeScript("scroll(0,500)");
    Thread.sleep(2000);
     WebDriverWait wait=new WebDriverWait(driver, 20);  //20 sec
    wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("AddToBasketButton"))).click();
}

@Then("^user can see shopping bag$")
public void user_can_see_shopping_bag() throws Throwable {
    String title = driver.getTitle();
    Assert.assertEquals(title,"Gift Card | Talbots");
    
    Thread.sleep(1000);
   
}

@Then("^user closes browser$")
public void user_closes_browser() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    driver.quit();
}
}
