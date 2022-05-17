package eu.ensup.manageraccount.service.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RefreshScope
@RestController
@CrossOrigin
public class ConfigController {
    @Value("${server.port}")
    private int port;

    @GetMapping("/config")
    public Map<String, Object> getConfig()
    {
        Map<String, Object> mapConfig = new HashMap<>();
        mapConfig.put("server.port", port);
        mapConfig.put("thread.name", Thread.currentThread().getName());
        return mapConfig;
    }
}
