<?php 
//require_once("../config/config.php");
require_once("pdo.php");
/*
if(isset($_GET['function']) && !empty($_GET['function'])){
    $function = $_GET['function'] ;
    switch ($function) {
        case "getAllElevesFromBdd" : getAllElevesFromBdd() ;
            break ;
        case "getAllElevesOfClasse" : 
            $idclasse = $_GET['idclasse'];
            getAllElevesOfClasse($idclasse) ;
            break ;
        case "getAllElevesOfSection" : 
            $idsection = $_GET['idsection'];
            getAllElevesOfSection($idsection) ;
            break ;
        case "getAllClassesOfSection" : 
            $idsection = $_GET['idsection'];
            getAllClassesOfSection($idsection) ;
            break ;
        case "createNewEleve" : createNewEleve() ;
            break ;
        case "saveEleveInClass" : 
            saveEleveInClass() ;
            break ;
        case "getIdEleve" : getIdEleve() ;
            break ;
    }
}
*/


//function getAllElevesFromBdd(){
    $bdd = connexionPDO();
    $req = 'SELECT * FROM eleves ORDER BY names, firstname' ;
    $stmt = $bdd -> prepare($req) ;
    $stmt->execute();
    $eleves = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    if(isset($_GET['function']) && $_GET['function'] == 'getAllElevesFromBdd'){
        echo json_encode($eleves); 
    } else {
        return $eleves;
    }
//}


?>