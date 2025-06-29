package com.example;

public interface ExternalApi {
    String getData();
    void sendData(String data);
    void logEvent();
    void connect();
    void disconnect();
}
