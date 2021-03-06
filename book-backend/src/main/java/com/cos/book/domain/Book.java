package com.cos.book.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity		//javax 꺼임, 서버 실행시 에 ORM이 됨(테이블이 H2에 생성됨)
public class Book {
	
	@Id 	//javax 꺼임, PK를 해당 변수로 하겠다.
	@GeneratedValue(strategy = GenerationType.IDENTITY) // 해당 데이터베이스 번호증가 전략을 따라감
	private Long id;
	
	private String title;
	private String author;

}