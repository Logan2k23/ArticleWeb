package com.codeForWebsite.ArticleWebsite.repository;

import com.codeForWebsite.ArticleWebsite.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article,Long> {

}
