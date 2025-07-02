package com.example.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AppenderLoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(AppenderLoggingExample.class);

    public static void main(String[] args) {
        logger.info("This log goes to both console and file.");
        logger.debug("Debugging application for issue tracking.");
        logger.error("Simulated error occurred!");
    }
}
