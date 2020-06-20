// Questao 7

function book(paran) {

    let livros = {
        
        'Helena':{
            nome:"Helena",
            quantidadePaginas:150,
            autor: "João",
            Editora: "A",        
        }, 
        'Sophia':{
            nome:"Sophia",
            quantidadePaginas:288,
            autor: "Carlos",
            Editora: "B",      

        }, 
    
        'A Escrava Isaura':{
            nome:"A Escrava Isaura",
            quantidadePaginas:544,
            autor: "Maria",
            Editora: "C",        

        },
   };

    if (livros[paran]){
        return livros[paran];
    }
        return livros;  

};

console.log(book('Helen'));












       

