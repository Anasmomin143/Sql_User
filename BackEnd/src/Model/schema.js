import con from "./../Connection_Db/connection.js";

const querry = "show DATABASES";
let dataBases;
let tables;
let signupFunction



const schemaFunction = async ()=>{
    
con.query(querry, async (err, data) => {
    if (err) throw err;
    dataBases = data;
    const DataBase =await  dataBases.find((dataBase) => {
      return dataBase.Database === "user_db";
    });
  //data base code
    if (DataBase === undefined) {
      const create_Db = "create database user_db";
      con.query(create_Db, (err) => {
        if (err) throw err;
        console.log("Database created!!");
      });
    } else {
  
      console.log("Database already exists!!");
    }
    //Table code
  
  
    const search_Table = "show tables from user_db";
    con.query(search_Table, async (err, data) => {
      if (err) throw err;
       tables =  data;
    
      const table_Db = await tables.find((table) => {
        return table.Tables_in_user_db === "user_table";
      });
  
      if (table_Db === undefined) {
        const create_Table = `CREATE TABLE user_db.user_table(
            user_id BIGINT,
            user_name VARCHAR(255),
            user_email VARCHAR(255),
            user_password VARCHAR(12),
            user_token VARCHAR(255)
        )`;
  
         con.query(create_Table, (err) => {
          if (err) throw err;
          console.log("Table created!"); 
          
        });
      } else {
        console.log("Table aready exists!!!");
      }
  
  
    });
  }); 
}

  //inserting data
  signupFunction = (user_name, user_email, user_Pass, user_id, user_token)=>{
           
    const insert_data = `INSERT INTO user_db.user_table(
        user_id,
        user_name,
        user_email,
        user_password,
        user_token
    
    ) VALUES ?`  

const values = [[
    user_id,
    user_name,
    user_email,  
    user_Pass,
    user_token
]]
 con.query(insert_data, [values],(err)=>{
    if(err) throw err;
    console.log("Data inserted!!")
})
}


// con.query(querry, async (err, data) => {
//   if (err) throw err;
//   dataBases = data;
//   const DataBase =await  dataBases.find((dataBase) => {
//     return dataBase.Database === "user_db";
//   });
// //data base code
//   if (DataBase === undefined) {
//     const create_Db = "create database user_db";
//     con.query(create_Db, (err) => {
//       if (err) throw err;
//       console.log("Database created!!");
//     });
//   } else {

//     console.log("Database already exists!!");
//   }
//   //Table code


//   const search_Table = "show tables from user_db";
//   con.query(search_Table, async (err, data) => {
//     if (err) throw err;
//      tables =  data;
  
//     const table_Db = await tables.find((table) => {
//       return table.Tables_in_user_db === "user_table";
//     });

//     if (table_Db === undefined) {
//       const create_Table = `CREATE TABLE user_db.user_table(
//           user_id BIGINT,
//           user_name VARCHAR(255),
//           user_email VARCHAR(255),
//           user_password VARCHAR(12),
//           user_token VARCHAR(255)
//       )`;

//        con.query(create_Table, (err) => {
//         if (err) throw err;
//         console.log("Table created!"); 
        
//       });
//     } else {
//       console.log("Table aready exists!!!");
//     }

//         //inserting data
//     signupFunction = (user_name, user_email, user_Pass, user_id, user_token)=>{
         
//         const insert_data = `INSERT INTO user_db.user_table(
//             user_id,
//             user_name,
//             user_email,
//             user_password,
//             user_token
        
//         ) VALUES ?`  

//     const values = [[
//         user_id,
//         user_name,
//         user_email,  
//         user_Pass,
//         user_token
//     ]]
//      con.query(insert_data, [values],(err)=>{
//         if(err) throw err;
//         console.log("Data inserted!!")
//     })
//     }
    



//   });
// }); 
export {signupFunction, schemaFunction };
