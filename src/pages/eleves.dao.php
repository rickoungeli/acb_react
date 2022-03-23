<?php 
header("Access-Control-Allow-Origin: *");
const HOST_NAME = "localhost";
const DATABASE_NAME = "test";
const USER_NAME = "root";
const PASSWORD = "";
//require_once("../config/config.php");

function connexionPDO() {
    try{
        $bdd = new PDO("mysql:host=". HOST_NAME ."; dbname=". DATABASE_NAME ."; charset=utf8", USER_NAME, PASSWORD);
        $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        return $bdd;
    }
    catch(PDOException $e) {
        $message = "Erreur PDO avec le message : ".$e->getMessage();
        die($message);
    }
}

//require_once("pdo.php");

//function getAllElevesFromBdd(){
    $bdd = connexionPDO();
    $req = 'SELECT * FROM eleve' ;
    $stmt = $bdd -> prepare($req) ;
    $stmt->execute();
    $eleves = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    print_r($eleves);
    return $eleves;
    //echo json_encode($eleves); 
//}



?>