package com.borsa.ws.stock;

import com.borsa.ws.user.User;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.Set;

@Data
@Entity
public class Stock {

    @Id
    @GeneratedValue
    private long id;

    @Column(unique = true)
    private String name;

    @NotNull
    @Column(unique = true)
    @Size(min = 3, max = 6)
    private String code;

    private double price;

    private Date date;

    @ManyToMany
    private Set<User> user; ;
}
