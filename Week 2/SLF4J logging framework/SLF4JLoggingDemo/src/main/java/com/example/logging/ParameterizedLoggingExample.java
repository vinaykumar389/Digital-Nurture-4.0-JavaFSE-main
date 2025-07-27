package com.example.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ParameterizedLoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(ParameterizedLoggingExample.class);

    public static void main(String[] args) {
        String username = "john_doe";
        int userId = 101;

        logger.info("User with ID {} and name {} has logged in.", userId, username);
        logger.warn("User {} attempted to access restricted area.", username);
        logger.error("Error occurred for user ID: {}", userId);
    }
}
