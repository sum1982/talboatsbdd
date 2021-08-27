/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;

/**
 *
 * @author kohli
 */

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty" , "html:target/cucumber-html-report", "json:target/cucumber.json", "junit:target/cucumber.xml", "rerun:target/rerun.txt"} ,

        features="C:\\Users\\kohli\\OneDrive\\Documents\\NetBeansProjects\\jan27\\talboBdd\\src\\main\\java\\features\\talbot.feature.feature",
//         glue = {"StepDefinations"},
        dryRun = false
//        tags= {"@TC1,@TC2,@TC3"}

)
public class RunCucumberTest {
    
   
}
