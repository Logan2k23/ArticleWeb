package com.codeForWebsite.ArticleWebsite.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Data
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    private String name;

    @Column(length=5000)
    private String text;

    //user Login
//
//    private String userName;
//    private String password;
//    private String email;



}
