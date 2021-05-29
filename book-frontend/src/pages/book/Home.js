import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

const Home = () => {

  const [books, setBooks] = useState([]);
  // 함수 실행시 최초 한번 실행되는 것 + 상태값이 변경될때마다 실행
  useEffect(()=> {
    fetch("http://localhost:8080/book",{
      method:"GET" // 기본이 GET이여서 생략가능
    }).then(res=> res.json()).then(res=>{
      console.log(1,res);
      setBooks(res);
    }); // 비동기 함수, 데이터 다운받는동안 밑에 그림 그려짐
        // 그림 다 그리고 데이터 받음
  }, [])

    return (
        <div>
          {books.map((book) =>(
            <BookItem key={book.id} book={book} />
          ))}  
        </div>
    );
};

export default Home;