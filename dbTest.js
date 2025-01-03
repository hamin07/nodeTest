const mariadb = require('mariadb');

const connection = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'master',
    database: 'myschool'
});


async function dbTest() {
    let conn;


    conn = await connection;


    const result = await conn.query(`SELECT students.name, grades.subject, grades.score
                        FROM students, grades
                        WHERE students.id = grades.student_id
                        AND students.id = 1`);
   
    console.log(result);


    for (let i = 0; i < result.length; i++) {
        console.log(result[i].name, result[i].subject, result[i].score);
    }


    await conn.end();
}


dbTest();


// async function runQuery() {
//     let connection;
    
//     try {
//       // 데이터베이스 연결
//       connection = await pool.getConnection();
  
//       // 예시 쿼리 실행 (여기서 필요한 쿼리로 변경)
//       const rows = await connection.query('SELECT * FROM students');
      
//       // 결과 출력
//       console.log(rows); // 결과를 콘솔에 출력
      
//     } catch (err) {
//       console.error('쿼리 실행 중 에러 발생:', err);
//     } finally {
//       if (connection) connection.end(); // 연결 종료
//     }
//   }
  
//   // 실행
//   runQuery();
