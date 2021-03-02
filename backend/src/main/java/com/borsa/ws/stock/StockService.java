package com.borsa.ws.stock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StockService {
    @Autowired
    StockRepository stockRepository;

    public void save(Stock body) {
        stockRepository.save(body);
    }

    public List<Stock> findAll() {
        return stockRepository.findAll();
    }

    public Optional<Stock> findById(long id) {
        return stockRepository.findById(id);
    }
    public void deleteStock(Long id){
        stockRepository.deleteById(id);
    }
}
