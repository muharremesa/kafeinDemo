package com.borsa.ws;

import com.borsa.ws.stock.Stock;
import com.borsa.ws.stock.StockService;
import com.borsa.ws.user.User;
import com.borsa.ws.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Date;

@SpringBootApplication
public class WsApplication {

    public static void main(String[] args) {
        SpringApplication.run(WsApplication.class, args);
    }

    @Bean
    CommandLineRunner createInitialUsers(UserService userService) {
        return (args) -> {
            for (int i = 1; i <= 10; i++) {
                User user = new User();
                user.setName("user"+i);
                user.setSurname("P4ssword");
                user.setDisplayName("display"+i);
                user.setEmail("email"+i+"@gmail.com");
                user.setId(i);
                user.setType(true);
                userService.save(user);
            }
        };
    }

    @Bean
    CommandLineRunner createInitialStocks(StockService stockService) {
        return (args) -> {
            for (int i = 1; i <= 10; i++) {
                Stock stock = new Stock();
                stock.setId(i);
                stock.setName("Stock"+i);
                stock.setCode("Code"+i);
                stock.setPrice(i*10);
                stock.setDate(new Date());
                stockService.save(stock);
            }
        };
    }
}
