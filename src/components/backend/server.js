const express = require("express")
const app = express()
const mysql = require("mysql2")
const cors = require("cors")

app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"123123",
    database:'barbearia',
})

/*



// Read
app.get("/itens", (req, res)=>{
    let SQL = "SELECT * from listaitens"

    db.query(SQL, (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

// Insert
app.post("/item", (req, res)=>{
    const {item} = req.body

    let SQL = "INSERT INTO listaitens ( itens ) VALUES (?)"

    db.query(SQL, item, (err, result)=>{
        console.log(err)
    })
})

//Delete
app.delete("/item/:id", (req, res)=>{
    const {id} = req.params
    console.log("Informação: ", id)

    let SQL = "DELETE from listaitens where (`id` = ?)"

    db.query(SQL, id, (err, result)=>{
        console.log(err)
    })
})
*/


app.post("/user", (req, res) => {
    const { email, senha } = req.body;
  
    let SQL = "SELECT senha FROM users WHERE email = ? AND senha = ?";

    
    db.query(SQL, [email, senha], (err, result) => {
      if (err) {
        console.error("Erro ao executar a consulta:", err);
        return res.status(500).json({ error: "Erro ao realizar a consulta" });
      }
  
      if (result.length === 0) {
        console.log('deu ruim')
        return res.status(401).json({ error: "Credenciais inválidas" });
      }
      console.log('deu bom')
      db.query('select id from users where email = ?', email, (err, result)=>{
        if(err){
            console.log('deu merda pegando o id')
        }
        if(result){
            //Desiste de pegar o id, tu vai é usar o email pra buscar o id do mano quando ele fizer o agendamento

            //let user_id = result[0]['id']
            //res.send(user_id)
            //console.log(result)
            
        }
      })
      //console.log(user_id)
      res.status(200).json({ message: "Login realizado com sucesso"});
    });
  });
  


app.post("/cadastrar", (req, res)=>{
    
    const {email, senha} = req.body // Pega os campos do body e adiona as variaveis email e s   enha
    
    console.log(req.body) // É o corpo da requisição, possui apenas os dados que foram enviados
    
    let SQL = "INSERT INTO users ( email, senha ) VALUES (?, ?)"
    
    // por temos mais de um parametro na tabela user, temos que usar uma lista
    db.query(SQL, [email, senha], (err, result)=>{
        console.log(err)
    })
    
    
})

app.listen(3001, ()=>{
    console.log('rodando o servidor')
})  
