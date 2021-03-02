package com.borsa.ws.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

//Data anotaion loombok özelliği kodumuzu daha temiz bir hala gelmiş oldu.
@Data
@Entity
public class User {

    @Id
    @GeneratedValue
    private long id;

    private String name;

    private String surname;

    @Column(unique = true)
    private String displayName;

    @JsonIgnore
    private String password;

    @Column(unique = true)
    private String email;

    private Boolean type; // true --> normal user --> false --> admin

}
