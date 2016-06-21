package com.github.solairerove.blog.client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

/**
 * Created by union on 20.06.16.
 */
@Controller("homeController")
@RequestMapping(value = "HOME")
public class HomeController {

    @RenderMapping
    public String indexPage() {
        return "index";
    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String homePage() {
        return "index";
    }
}
