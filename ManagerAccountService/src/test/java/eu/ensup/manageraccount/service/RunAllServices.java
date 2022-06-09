package eu.ensup.manageraccount.service;

import eu.ensup.manageraccount.service.service.AccountServiceTest;
import org.junit.platform.suite.api.SelectClasses;
import org.junit.platform.suite.api.Suite;

@Suite
@SelectClasses({
        AccountServiceTest.class
})
public class RunAllServices {
}
