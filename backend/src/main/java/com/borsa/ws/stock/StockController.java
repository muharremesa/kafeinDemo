package com.borsa.ws.stock;

import com.borsa.ws.user.UserController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
public class StockController {

    private static final Logger log = LoggerFactory.getLogger((UserController.class));
    @Autowired
    StockService stockService;

    @PostMapping("/api/1.0/stock")
    public void createStock(@RequestBody Stock body) {// Kullanıcı kaydeder
        body.setDate(new Date());
        stockService.save(body);
        log.info(body.toString());
    }

    @GetMapping("/api/1.0/stocks")
    public List<Stock> getStocks() {
        log.info("Get Stocks is run");
        log.info(stockService.findAll().toString());
        return stockService.findAll();
    }

    @GetMapping("/api/1.0/stock/{id}")
    public Object getStock(@PathVariable long id) {
        log.info("Get Stock is run");
        return stockService.findById(id);
    }

    @DeleteMapping(("/api/1.0/stock/{id}"))
    public void deleteStock(@PathVariable long id){
        log.info("Delete User is run");
        stockService.deleteStock(id);
    }

    @PutMapping("api/1.0/stock")
    public void updateStock(@RequestBody Stock body){
        log.info("Update User is run");
        body.setDate(new Date());
        stockService.save(body);
    }

    @PostMapping("/api/1.0/buy")
    public void registerStockForUser(@RequestBody Stock body) {// Kullanıcı kaydeder
        stockService.save(body);
        log.info(body.toString());
    }
}
