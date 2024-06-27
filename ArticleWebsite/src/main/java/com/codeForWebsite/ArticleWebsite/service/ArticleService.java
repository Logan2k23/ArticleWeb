package com.codeForWebsite.ArticleWebsite.service;


import com.codeForWebsite.ArticleWebsite.entity.Article;
import com.codeForWebsite.ArticleWebsite.repository.ArticleRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ArticleService {

    public final ArticleRepository articleRepository;

    public Article postArticle(Article article){
        return articleRepository.save(article);
    }


    public List<Article> getAllArticles(){
        return articleRepository.findAll();
    }

    public void deleteArticle(Long id){
        if(!articleRepository.existsById(id)){
            throw new EntityNotFoundException("Article with ID"+id+"not found");
        }
        articleRepository.deleteById(id);
    }

    public Article getEmployeeById(Long id){
        return articleRepository.findById(id).orElse(null);
    }

    public Article updateEmployee(Long id,Article employee){
        Optional<Article> optionalArticle=articleRepository.findById(id);
        if(optionalArticle.isPresent()){
            Article existingArticle=optionalArticle.get();


            existingArticle.setName(employee.getName());
            existingArticle.setText(employee.getText());

            return articleRepository.save(existingArticle);
        }
        return null;
    }


    //login



}
