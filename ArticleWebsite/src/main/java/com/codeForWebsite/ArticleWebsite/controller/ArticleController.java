package com.codeForWebsite.ArticleWebsite.controller;



import com.codeForWebsite.ArticleWebsite.entity.Article;
import com.codeForWebsite.ArticleWebsite.service.ArticleService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ArticleController {

    private final ArticleService articleService;

    @PostMapping("/article")
    public Article postArticle(@RequestBody Article article){
        return articleService.postArticle(article);
    }


    @GetMapping("/articles")
    public List<Article> getAllArticles(){
        return articleService.getAllArticles();
    }

    @DeleteMapping("/articles/{id}")
    public ResponseEntity<?> deleteArticle(@PathVariable Long id){
        try{
            articleService.deleteArticle(id);
            return new ResponseEntity<>("Article with ID "+ id+" delete successfully", HttpStatus.OK);

        }catch(EntityNotFoundException e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/article/{id}")
    public ResponseEntity<?> getArticleById(@PathVariable Long id){
        Article article = articleService.getEmployeeById(id);
        if(article==null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(article);
    }

    @PatchMapping("/article/{id}")
    public ResponseEntity<?> updateEmployee(@PathVariable Long id,@RequestBody Article employee){
        Article updatedArticle=articleService.updateEmployee(id,employee);

        if(updatedArticle ==null)return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        return ResponseEntity.ok(updatedArticle);
    }

    //Login functions


}
