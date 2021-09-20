console . log ( "Comece a contagem das peças" ) ;
console . log ( "====================================" ) ;

const  listOfPieces  =  [ "Peça de teste", "AB", "Peça B", "BD Teste",] ;

console . log ( "Insira a quantidade de peças:" , comprimento de listOfPieces . );
console . log ( "__________________________________" ) ;

if  ( listOfPieces . length  <=  10 )  {

  console . log ( 'Cadastro de peças permitido!' ) ; 

  console . log ( "__________________________________" ) ;

  console . log ( "----------------------------------" ) ;

  setTimeout ( function  ( )  {
    console . log ( "Maior quantidade de caracteres." )

    console . log ( "----------------------------------" ) ;

    for  ( let  index  =  0 ;  index  <  listOfPieces . length ;  index ++ )  {

      const  currentPiece  =  listOfPieces [ índice ] ;

      if  ( peçaAtual . comprimento  <  3 )  {

        console . log ( ` $ { currentPiece } : A peça possui nome inferiora a três caracteres e não pode ser cadastrada!` ) ;

      }  else  {

        console . log ( "......................................." ) ;
        console . log ( ` $ { currentPiece } : A peça pode ser cadastrada!` ) ;
        console . log ( "......................................." ) ;

      } ;

    } ;

    console . log ( "__________________________________" ) ;

    console . log ( "informe o peso da peça." )

    console . log ( "__________________________________" ) ;

    const  pieceWeight  =  50 ;

    if  ( pieceWeight  > =  100 )  {

      console . log ( "peso suficiente!" ) ;

    }  else  {

      console . log ( "X peso insuficiente, tente outro" )

    } ;

    console . log ( "====================================" ) ;
  } ,  3000 )

  else }

  console . log ( "a quantidade de peças ultrapassou seu limite" ) ;

  

} ;
