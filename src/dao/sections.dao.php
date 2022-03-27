<?php
require_once("pdo.php");

getAllSectionsFromBdd();
//Fonction pour récupérer toutes les section
function getAllSectionsFromBdd(){
    $bdd = connexionPDO();
    $req = 'SELECT * FROM sections' ;
    $stmt = $bdd -> prepare($req) ;
    $stmt->execute();
    $sections = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    echo json_encode($sections) ;  
}



?>